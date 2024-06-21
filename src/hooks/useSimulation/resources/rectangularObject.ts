import { toRadians } from "../../../auxiliary/angleAux"
import { isBetween } from "../../../auxiliary/isBetween"
import { rotate, translate } from "../../../auxiliary/vector"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import { createBallState } from "../../useMainState/resources/Balls/defaultState"
import type { ContainerState } from "../../useMainState/resources/Container/Container_types"
import type { ObstacleState } from "../../useMainState/resources/Obstacle/Obstacle_types"
import { createObstacleState } from "../../useMainState/resources/Obstacle/defaultState"
import type {
  CornerCollision,
  ObjectEdgeSelector,
  ObjectProps,
  RectangularObjectTransform,
  RectangularObjectTransformProps,
  VectorProperty
} from "../useSimulation_types"
import { ellipticalObstacleCollision } from "./ellipticalObject"

export function rectangularCollision(
  ball: BallData,
  container: ContainerState,
  dt: number
): void {
  const radius = ball.radius
  const containerTransform = createObjectTransform(ball, container)
  const { position, lastPosition, objectX, objectY } =
    containerTransform.transform()

  // Check for collision
  if (position[0] - radius < objectX[0]) {
    const diff = Math.abs(position[0] - lastPosition[0])
    position[0] = objectX[0] + radius
    lastPosition[0] = position[0] - diff
  }

  if (position[0] + radius > objectX[1]) {
    const diff = Math.abs(position[0] - lastPosition[0])
    position[0] = objectX[1] - radius
    lastPosition[0] = position[0] + diff
  }

  if (position[1] + radius > objectY[0]) {
    const diff = Math.abs(position[1] - lastPosition[1])
    position[1] = objectY[0] - radius
    lastPosition[1] = position[1] + diff
  }

  if (position[1] - radius < objectY[1]) {
    const diff = Math.abs(position[1] - lastPosition[1])
    position[1] = objectY[1] + radius
    lastPosition[1] = position[1] - diff
  }

  const newProperties = containerTransform.undo(position, lastPosition)

  // Update ball properties
  ball.positionX = newProperties.position[0]
  ball.positionY = newProperties.position[1]
  ball.lastPositionX = newProperties.lastPosition[0]
  ball.lastPositionY = newProperties.lastPosition[1]
  ball.velocityX =
    (newProperties.position[0] - newProperties.lastPosition[0]) / dt
  ball.velocityY =
    (newProperties.position[1] - newProperties.lastPosition[1]) / dt
}

// --------------------------------------------------------
// --------------------------------------------------------

export function rectangularObstacleCollision(
  ball: BallData,
  container: ContainerState,
  dt: number
): void {
  const radius = ball.radius
  const containerTransform = createObjectTransform(ball, container)
  const { position, lastPosition, objectX, objectY } =
    containerTransform.transform()

  // Check for collision
  if (isInsideVirtualObstacle(position, radius, objectX, objectY)) {
    const collision = collisionType(
      position,
      lastPosition,
      radius,
      objectX,
      objectY
    )
    if (collision.isCornerCollision) {
      cornerObstacleCollision(
        position,
        lastPosition,
        radius,
        objectX,
        objectY,
        collision,
        dt
      )
    } else
      edgeObstacleCollision(position, lastPosition, radius, objectX, objectY)
  }

  const newProperties = containerTransform.undo(position, lastPosition)

  // Update ball properties
  ball.positionX = newProperties.position[0]
  ball.positionY = newProperties.position[1]
  ball.lastPositionX = newProperties.lastPosition[0]
  ball.lastPositionY = newProperties.lastPosition[1]
  ball.velocityX =
    (newProperties.position[0] - newProperties.lastPosition[0]) / dt
  ball.velocityY =
    (newProperties.position[1] - newProperties.lastPosition[1]) / dt
}

// --------------------------------------------------------
// --------------------------------------------------------

function isInsideVirtualObstacle(
  position: VectorProperty,
  radius: number,
  objectX: VectorProperty,
  objectY: VectorProperty
): boolean {
  return (
    isBetween(position[0], objectX[0] - radius, objectX[1] + radius) &&
    isBetween(position[1], objectY[1] - radius, objectY[0] + radius)
  )
}

// --------------------------------------------------------
// --------------------------------------------------------

function collisionType(
  position: VectorProperty,
  lastPosition: VectorProperty,
  radius: number,
  objectX: VectorProperty,
  objectY: VectorProperty
): CornerCollision {
  const displacement = getCollisionPoint(
    position,
    lastPosition,
    radius,
    objectX,
    objectY
  )
  if (displacement == null)
    return { isCornerCollision: false, corner: "bottom-left" }

  const diffX = lastPosition[0] - position[0]
  const diffY = lastPosition[1] - position[1]

  position[0] += displacement * diffX
  position[1] += displacement * diffY
  lastPosition[0] += displacement * diffX
  lastPosition[1] += displacement * diffY

  if (
    isBetween(position[0], objectX[0] - radius, objectX[0]) &&
    isBetween(position[1], objectY[0], objectY[0] + radius)
  )
    return { isCornerCollision: true, corner: "top-left" }

  if (
    isBetween(position[0], objectX[1], objectX[1] + radius) &&
    isBetween(position[1], objectY[0], objectY[0] + radius)
  )
    return { isCornerCollision: true, corner: "top-right" }

  if (
    isBetween(position[0], objectX[0] - radius, objectX[0]) &&
    isBetween(position[1], objectY[1] - radius, objectY[1])
  )
    return { isCornerCollision: true, corner: "bottom-left" }

  if (
    isBetween(position[0], objectX[1], objectX[1] + radius) &&
    isBetween(position[1], objectY[1] - radius, objectY[1])
  )
    return { isCornerCollision: true, corner: "bottom-right" }

  return { isCornerCollision: false, corner: "bottom-left" }
}

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

function getCollisionPoint(
  position: VectorProperty,
  lastPosition: VectorProperty,
  radius: number,
  objectX: VectorProperty,
  objectY: VectorProperty
): number | undefined {
  const dp = [lastPosition[0] - position[0], lastPosition[1] - position[1]]
  if (dp[0] === 0 && dp[1] === 0) return

  let a = Number.MAX_SAFE_INTEGER
  let displacement = 0

  if (dp[0] !== 0) {
    const left = (objectX[0] - radius - position[0]) / dp[0]
    const right = (objectX[1] + radius - position[0]) / dp[0]

    if (left > 0 && left < a) {
      a = left
      displacement = (objectX[0] - radius / 2 - position[0]) / dp[0]
    }
    if (right > 0 && right < a) {
      a = right
      displacement = (objectX[1] + radius / 2 - position[0]) / dp[0]
    }
  }
  if (dp[1] !== 0) {
    const top = (objectY[0] + radius - position[1]) / dp[1]
    const bottom = (objectY[1] - radius - position[1]) / dp[1]

    if (top > 0 && top < a) {
      a = top
      displacement = (objectY[0] + radius / 2 - position[1]) / dp[1]
    }
    if (bottom > 0 && bottom < a) {
      a = bottom
      displacement = (objectY[1] - radius / 2 - position[1]) / dp[1]
    }
  }

  return displacement
}

// --------------------------------------------------------

function edgeObstacleCollision(
  position: VectorProperty,
  lastPosition: VectorProperty,
  radius: number,
  objectX: VectorProperty,
  objectY: VectorProperty
): void {
  const edgeSelector: ObjectEdgeSelector[] = [
    {
      edge: "left",
      distance: Math.abs(position[0] + radius - objectX[0])
    },
    {
      edge: "right",
      distance: Math.abs(position[0] - radius - objectX[1])
    },
    {
      edge: "top",
      distance: Math.abs(position[1] + radius - objectY[0])
    },
    {
      edge: "bottom",
      distance: Math.abs(position[1] - radius - objectY[1])
    }
  ]

  const collisionEdge = edgeSelector.sort((a, b) => a.distance - b.distance)[0]
    .edge

  const diffX = Math.abs(position[0] - lastPosition[0])
  const diffY = Math.abs(position[1] - lastPosition[1])

  if (collisionEdge === "left") {
    position[0] = objectX[0] - radius
    lastPosition[0] = position[0] + diffX
  }
  if (collisionEdge === "right") {
    position[0] = objectX[1] + radius
    lastPosition[0] = position[0] - diffX
  }
  if (collisionEdge === "bottom") {
    position[1] = objectY[1] - radius
    lastPosition[1] = position[1] + diffY
  }
  if (collisionEdge === "top") {
    position[1] = objectY[0] + radius
    lastPosition[1] = position[1] - diffY
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function cornerObstacleCollision(
  position: VectorProperty,
  lastPosition: VectorProperty,
  radius: number,
  objectX: VectorProperty,
  objectY: VectorProperty,
  collision: CornerCollision,
  dt: number
): void {
  let ballPosition = [...position]
  let ballLastPosition = [...lastPosition]
  const dummyBall = createBallState()
  const dummyObstacle = createObstacleState()
  let translationVector = [0, 0]

  if (collision.corner === "top-left")
    translationVector = [-objectX[0], -objectY[0]]
  if (collision.corner === "top-right")
    translationVector = [-objectX[1], -objectY[0]]
  if (collision.corner === "bottom-left")
    translationVector = [-objectX[0], -objectY[1]]
  if (collision.corner === "bottom-right")
    translationVector = [-objectX[1], -objectY[1]]

  ballPosition = translate(ballPosition, translationVector)
  ballLastPosition = translate(ballLastPosition, translationVector)

  dummyBall.positionX = 0
  dummyBall.positionY = 0
  dummyBall.lastPositionX = ballPosition[0] - ballLastPosition[0]
  dummyBall.lastPositionY = ballPosition[1] - ballLastPosition[1]
  dummyBall.radius = 0

  dummyObstacle.positionX = ballPosition[0] - radius
  dummyObstacle.positionY = ballPosition[1] + radius
  dummyObstacle.width = 2 * radius
  dummyObstacle.height = 2 * radius

  ellipticalObstacleCollision(dummyBall, dummyObstacle, dt)

  position[0] = ballPosition[0] - dummyBall.positionX - translationVector[0]
  position[1] = ballPosition[1] - dummyBall.positionY - translationVector[1]
  lastPosition[0] = position[0] + dummyBall.positionX - dummyBall.lastPositionX
  lastPosition[1] = position[1] + dummyBall.positionY - dummyBall.lastPositionY
}

// --------------------------------------------------------
// ----------------- Transform Object ---------------------

function createObjectTransform(
  ball: BallData,
  object: ContainerState | ObstacleState
): RectangularObjectTransform {
  let position = [ball.positionX, ball.positionY]
  let lastPosition = [ball.lastPositionX, ball.lastPositionY]
  const angle = toRadians(object.angle)
  let objectTL = [object.positionX, object.positionY]
  let objectBR = [
    object.positionX + object.width,
    object.positionY - object.height
  ]

  const objectCenter = [
    object.positionX + object.width / 2,
    object.positionY - object.height / 2
  ]

  function transform(): RectangularObjectTransformProps {
    // Move properties to object reference frame
    const translation = [-objectCenter[0], -objectCenter[1]]
    position = translate(position, translation)
    lastPosition = translate(lastPosition, translation)
    objectTL = translate(objectTL, translation)
    objectBR = translate(objectBR, translation)

    // Rotate properties to object reference frame
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)

    return {
      position: [position[0], position[1]],
      lastPosition: [lastPosition[0], lastPosition[1]],
      objectX: [objectTL[0], objectBR[0]],
      objectY: [objectTL[1], objectBR[1]]
    }
  }

  function undo(
    transformPosition: VectorProperty,
    transformLastPosition: VectorProperty
  ): ObjectProps {
    // Return properties to the ball reference frame
    let newPosition = rotate(transformPosition, angle)
    let newLastPosition = rotate(transformLastPosition, angle)

    newPosition = translate(newPosition, objectCenter)
    newLastPosition = translate(newLastPosition, objectCenter)

    return {
      position: [newPosition[0], newPosition[1]],
      lastPosition: [newLastPosition[0], newLastPosition[1]]
    }
  }

  return { transform, undo }
}

// --------------------------------------------------------
