import { toRadians } from "../../../auxiliary/angleAux"
import { isBetween } from "../../../auxiliary/isBetween"
import { rotate, translate } from "../../../auxiliary/vector"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import { createBallState } from "../../useMainState/resources/Balls/defaultState"
import type { ContainerState } from "../../useMainState/resources/Container/Container_types"
import type { ObstacleState } from "../../useMainState/resources/Obstacle/Obstacle_types"
import { createObstacleState } from "../../useMainState/resources/Obstacle/defaultState"
import type {
  CollisionInfo,
  ProjectionParameter,
  ObjectProps,
  RectangularEdgeCollision,
  RectangularObjectTransform,
  RectangularObjectTransformProps,
  RectangularObstacleCollision,
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
  obstacle: ObstacleState,
  dt: number
): void {
  const radius = ball.radius
  const obstacleTransform = createObjectTransform(ball, obstacle)
  const { position, lastPosition, objectX, objectY } =
    obstacleTransform.transform()

  // Check for collision
  checkObstacleCollision(position, lastPosition, objectX, objectY, radius, dt)

  const newProperties = obstacleTransform.undo(position, lastPosition)

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

function checkObstacleCollision(
  position: VectorProperty,
  lastPosition: VectorProperty,
  objectX: VectorProperty,
  objectY: VectorProperty,
  radius: number,
  dt: number
): void {
  if (!isInsideVirtualObstacle(position, radius, objectX, objectY)) return

  const collisionData = { position, lastPosition, objectX, objectY, radius }
  const collisionInfo = getObstacleCollisionInfo(collisionData)

  if (collisionInfo.type === "falseCollision") return

  if (collisionInfo.type === "edge")
    edgeObstacleCollision(collisionData, collisionInfo)
  if (collisionInfo.type === "corner")
    cornerObstacleCollision(collisionData, collisionInfo, dt)
}

// --------------------------------------------------------
// ---------------- Virtual Obstacle ----------------------

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

function getObstacleCollisionInfo(
  data: CollisionInfo
): RectangularObstacleCollision {
  const naturalCornerCollision = isNaturalCornerCollision(data)

  if (naturalCornerCollision != null) return naturalCornerCollision

  const projectedCollision = getProjectedCollision(data)

  return projectedCollision
}

// --------------------------------------------------------
// --------------------------------------------------------

function isNaturalCornerCollision({
  lastPosition,
  objectX,
  objectY,
  position,
  radius
}: CollisionInfo): RectangularObstacleCollision | undefined {
  const collision: RectangularObstacleCollision = {
    position: [...position],
    lastPosition: [...lastPosition],
    cornerCollision: "top-left",
    edgeCollision: "top",
    type: "falseCollision"
  }

  // Top Left
  if (
    isBetween(position[0], objectX[0] - radius, objectX[0]) &&
    isBetween(position[1], objectY[0], objectY[0] + radius)
  ) {
    if (Math.hypot(position[0] - objectX[0], position[1] - objectY[0]) > radius)
      return { ...collision, type: "falseCollision" }

    return { ...collision, type: "corner", cornerCollision: "top-left" }
  }

  // Top Right
  if (
    isBetween(position[0], objectX[1], objectX[1] + radius) &&
    isBetween(position[1], objectY[0], objectY[0] + radius)
  ) {
    if (Math.hypot(position[0] - objectX[1], position[1] - objectY[0]) > radius)
      return { ...collision, type: "falseCollision" }

    return { ...collision, type: "corner", cornerCollision: "top-right" }
  }

  // Bottom Left
  if (
    isBetween(position[0], objectX[0] - radius, objectX[0]) &&
    isBetween(position[1], objectY[1] - radius, objectY[1])
  ) {
    if (Math.hypot(position[0] - objectX[0], position[1] - objectY[1]) > radius)
      return { ...collision, type: "falseCollision" }

    return { ...collision, type: "corner", cornerCollision: "bottom-left" }
  }

  // Bottom Right
  if (
    isBetween(position[0], objectX[1], objectX[1] + radius) &&
    isBetween(position[1], objectY[1] - radius, objectY[1])
  ) {
    if (Math.hypot(position[0] - objectX[1], position[1] - objectY[1]) > radius)
      return { ...collision, type: "falseCollision" }

    return { ...collision, type: "corner", cornerCollision: "bottom-right" }
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function getProjectedCollision(
  data: CollisionInfo
): RectangularObstacleCollision {
  const projectionParameter = getProjectionParameter(data)

  if (projectionParameter == null)
    return {
      type: "edge",
      edgeCollision: "top",
      cornerCollision: "top-left",
      position: [data.position[0], data.objectY[0] + data.radius],
      lastPosition: [data.position[0], data.objectY[0] + data.radius]
    }

  const projectedCornerCollision = isProjectedCornerCollision(
    data,
    projectionParameter
  )

  if (projectedCornerCollision != null) return projectedCornerCollision

  const dp = [
    data.lastPosition[0] - data.position[0],
    data.lastPosition[1] - data.position[1]
  ]
  return {
    type: "edge",
    cornerCollision: "top-left",
    edgeCollision: projectionParameter.edge,
    position: [
      data.position[0] + projectionParameter.parameter * dp[0],
      data.position[1] + projectionParameter.parameter * dp[1]
    ],
    lastPosition: [
      data.lastPosition[0] + projectionParameter.parameter * dp[0],
      data.lastPosition[1] + projectionParameter.parameter * dp[1]
    ]
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function getProjectionParameter({
  lastPosition,
  objectX,
  objectY,
  position,
  radius
}: CollisionInfo): ProjectionParameter | undefined {
  const dp = [lastPosition[0] - position[0], lastPosition[1] - position[1]]
  if (dp[0] === 0 && dp[1] === 0) return

  let parameter = Number.MAX_SAFE_INTEGER
  let edge: RectangularEdgeCollision = "left"

  if (dp[0] !== 0) {
    const left = (objectX[0] - radius - position[0]) / dp[0]
    const right = (objectX[1] + radius - position[0]) / dp[0]

    if (left > 0 && left < parameter) {
      parameter = left
      edge = "left"
    }
    if (right > 0 && right < parameter) {
      parameter = right
      edge = "right"
    }
  }

  if (dp[1] !== 0) {
    const top = (objectY[0] + radius - position[1]) / dp[1]
    const bottom = (objectY[1] - radius - position[1]) / dp[1]

    if (top > 0 && top < parameter) {
      parameter = top
      edge = "top"
    }
    if (bottom > 0 && bottom < parameter) {
      parameter = bottom
      edge = "bottom"
    }
  }

  return { edge, parameter }
}

// --------------------------------------------------------
// --------------------------------------------------------

function isProjectedCornerCollision(
  { lastPosition, objectX, objectY, position, radius }: CollisionInfo,
  { edge, parameter }: ProjectionParameter
): RectangularObstacleCollision | undefined {
  const collision: RectangularObstacleCollision = {
    position: [...position],
    lastPosition: [...lastPosition],
    cornerCollision: "top-left",
    edgeCollision: "top",
    type: "corner"
  }

  const dp = [lastPosition[0] - position[0], lastPosition[1] - position[1]]
  const projectedX = position[0] + parameter * dp[0]
  const projectedY = position[1] + parameter * dp[1]
  const projectedRadius = (9 * radius) / 10

  // Top left
  if (
    (edge === "left" &&
      isBetween(projectedY, objectY[0], objectY[0] + radius)) ||
    (edge === "top" && isBetween(projectedX, objectX[0] - radius, objectX[0]))
  ) {
    const A = position[0] - objectX[0]
    const B = position[1] - objectY[0]
    const [parameterA, parameterB] = getProjectedCornerParameter(
      dp,
      projectedRadius,
      A,
      B
    )
    let cornerParameter = parameter
    if (
      position[0] + parameterA * dp[0] <= objectX[0] &&
      position[1] + parameterA * dp[1] >= objectY[0]
    )
      cornerParameter = parameterA
    if (
      position[0] + parameterB * dp[0] <= objectX[0] &&
      position[1] + parameterB * dp[1] >= objectY[0]
    )
      cornerParameter = parameterB

    return {
      ...collision,
      cornerCollision: "top-left",
      position: [
        position[0] + cornerParameter * dp[0],
        position[1] + cornerParameter * dp[1]
      ],
      lastPosition: [
        lastPosition[0] + cornerParameter * dp[0],
        lastPosition[1] + cornerParameter * dp[1]
      ]
    }
  }

  // Top right
  if (
    (edge === "right" &&
      isBetween(projectedY, objectY[0], objectY[0] + radius)) ||
    (edge === "top" && isBetween(projectedX, objectX[1], objectX[1] + radius))
  ) {
    const A = position[0] - objectX[1]
    const B = position[1] - objectY[0]
    const [parameterA, parameterB] = getProjectedCornerParameter(
      dp,
      projectedRadius,
      A,
      B
    )
    let cornerParameter = parameter
    if (
      position[0] + parameterA * dp[0] >= objectX[1] &&
      position[1] + parameterA * dp[1] >= objectY[0]
    )
      cornerParameter = parameterA
    if (
      position[0] + parameterB * dp[0] >= objectX[1] &&
      position[1] + parameterB * dp[1] >= objectY[0]
    )
      cornerParameter = parameterB

    return {
      ...collision,
      cornerCollision: "top-right",
      position: [
        position[0] + cornerParameter * dp[0],
        position[1] + cornerParameter * dp[1]
      ],
      lastPosition: [
        lastPosition[0] + cornerParameter * dp[0],
        lastPosition[1] + cornerParameter * dp[1]
      ]
    }
  }

  // Bottom left
  if (
    (edge === "left" &&
      isBetween(projectedY, objectY[1] - radius, objectY[1])) ||
    (edge === "bottom" &&
      isBetween(projectedX, objectX[0] - radius, objectX[0]))
  ) {
    const A = position[0] - objectX[0]
    const B = position[1] - objectY[1]
    const [parameterA, parameterB] = getProjectedCornerParameter(
      dp,
      projectedRadius,
      A,
      B
    )
    let cornerParameter = parameter
    if (
      position[0] + parameterA * dp[0] <= objectX[0] &&
      position[1] + parameterA * dp[1] <= objectY[1]
    )
      cornerParameter = parameterA
    if (
      position[0] + parameterB * dp[0] <= objectX[0] &&
      position[1] + parameterB * dp[1] <= objectY[1]
    )
      cornerParameter = parameterB

    return {
      ...collision,
      cornerCollision: "bottom-left",
      position: [
        position[0] + cornerParameter * dp[0],
        position[1] + cornerParameter * dp[1]
      ],
      lastPosition: [
        lastPosition[0] + cornerParameter * dp[0],
        lastPosition[1] + cornerParameter * dp[1]
      ]
    }
  }

  // Bottom right
  if (
    (edge === "right" &&
      isBetween(projectedY, objectY[1] - radius, objectY[1])) ||
    (edge === "bottom" &&
      isBetween(projectedX, objectX[1], objectX[1] + radius))
  ) {
    const A = position[0] - objectX[1]
    const B = position[1] - objectY[1]
    const [parameterA, parameterB] = getProjectedCornerParameter(
      dp,
      projectedRadius,
      A,
      B
    )
    let cornerParameter = parameter
    if (
      position[0] + parameterA * dp[0] >= objectX[1] &&
      position[1] + parameterA * dp[1] <= objectY[1]
    )
      cornerParameter = parameterA
    if (
      position[0] + parameterB * dp[0] >= objectX[1] &&
      position[1] + parameterB * dp[1] <= objectY[1]
    )
      cornerParameter = parameterB

    return {
      ...collision,
      cornerCollision: "bottom-right",
      position: [
        position[0] + cornerParameter * dp[0],
        position[1] + cornerParameter * dp[1]
      ],
      lastPosition: [
        lastPosition[0] + cornerParameter * dp[0],
        lastPosition[1] + cornerParameter * dp[1]
      ]
    }
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function getProjectedCornerParameter(
  dp: number[],
  radius: number,
  A: number,
  B: number
): [number, number] {
  const alpha = dp[0] ** 2 + dp[1] ** 2
  const beta = 2 * (dp[0] * A + dp[1] * B)
  const gamma = A ** 2 + B ** 2 - radius ** 2
  const discriminant = Math.sqrt(beta ** 2 - 4 * alpha * gamma)

  const t1 = (-beta + discriminant) / (2 * alpha)
  const t2 = (-beta - discriminant) / (2 * alpha)

  return [t1, t2]
}

// --------------------------------------------------------
// --------------------------------------------------------

function edgeObstacleCollision(
  data: CollisionInfo,
  collision: RectangularObstacleCollision
): void {
  const diffX = Math.abs(collision.position[0] - collision.lastPosition[0])
  const diffY = Math.abs(collision.position[1] - collision.lastPosition[1])

  data.position[0] = collision.position[0]
  data.position[1] = collision.position[1]
  data.lastPosition[0] = collision.lastPosition[0]
  data.lastPosition[1] = collision.lastPosition[1]

  if (collision.edgeCollision === "left") {
    data.lastPosition[0] = data.position[0] + diffX
  }
  if (collision.edgeCollision === "right") {
    data.lastPosition[0] = data.position[0] - diffX
  }
  if (collision.edgeCollision === "bottom") {
    data.lastPosition[1] = data.position[1] + diffY
  }
  if (collision.edgeCollision === "top") {
    data.lastPosition[1] = data.position[1] - diffY
  }
}

// --------------------------------------------------------
// --------------------------------------------------------
function cornerObstacleCollision(
  data: CollisionInfo,
  collision: RectangularObstacleCollision,
  dt: number
): void {
  let ballPosition = [...collision.position]
  let ballLastPosition = [...collision.lastPosition]
  const dummyBall = createBallState()
  const dummyObstacle = createObstacleState()
  let translationVector = [0, 0]

  if (collision.cornerCollision === "top-left")
    translationVector = [-data.objectX[0], -data.objectY[0]]
  if (collision.cornerCollision === "top-right")
    translationVector = [-data.objectX[1], -data.objectY[0]]
  if (collision.cornerCollision === "bottom-left")
    translationVector = [-data.objectX[0], -data.objectY[1]]
  if (collision.cornerCollision === "bottom-right")
    translationVector = [-data.objectX[1], -data.objectY[1]]

  ballPosition = translate(ballPosition, translationVector)
  ballLastPosition = translate(ballLastPosition, translationVector)

  dummyBall.positionX = 0
  dummyBall.positionY = 0
  dummyBall.lastPositionX = ballPosition[0] - ballLastPosition[0]
  dummyBall.lastPositionY = ballPosition[1] - ballLastPosition[1]
  dummyBall.radius = 0

  dummyObstacle.positionX = ballPosition[0] - data.radius
  dummyObstacle.positionY = ballPosition[1] + data.radius
  dummyObstacle.width = 2 * data.radius
  dummyObstacle.height = 2 * data.radius

  ellipticalObstacleCollision(dummyBall, dummyObstacle, dt)

  data.position[0] =
    ballPosition[0] - dummyBall.positionX - translationVector[0]
  data.position[1] =
    ballPosition[1] - dummyBall.positionY - translationVector[1]
  data.lastPosition[0] =
    data.position[0] + dummyBall.positionX - dummyBall.lastPositionX
  data.lastPosition[1] =
    data.position[1] + dummyBall.positionY - dummyBall.lastPositionY
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
