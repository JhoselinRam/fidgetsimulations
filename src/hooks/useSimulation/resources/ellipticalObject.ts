import { toRadians } from "../../../auxiliary/angleAux"
import { isBetween } from "../../../auxiliary/isBetween"
import { rotate, translate } from "../../../auxiliary/vector"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import type { ContainerState } from "../../useMainState/resources/Container/Container_types"
import type { ObstacleState } from "../../useMainState/resources/Obstacle/Obstacle_types"
import type {
  EllipticalObjectTransform,
  EllipticalObjectTransformProps,
  ObjectProps,
  VectorProperty
} from "../useSimulation_types"

export function ellipticalCollision(
  ball: BallData,
  container: ContainerState,
  dt: number
): void {
  const containerTransform = createObjectTransform(ball, container)
  const isInside = containerTransform.isInside()

  if (isInside == null) return
  if (isInside) return

  const { containerDistance, lastPosition, position } =
    containerTransform.transform()

  const diff = Math.abs(position[0] - lastPosition[0])
  position[0] = containerDistance
  lastPosition[0] = position[0] + diff

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

export function ellipticalObstacleCollision(
  ball: BallData,
  container: ContainerState,
  dt: number
): void {
  const containerTransform = createObjectTransform(ball, container, false)
  const isInside = containerTransform.isInside()

  if (isInside == null) return
  if (!isInside) return

  const { containerDistance, lastPosition, position } =
    containerTransform.transform()

  const diff = Math.abs(position[0] - lastPosition[0])
  position[0] = containerDistance
  lastPosition[0] = position[0] - diff

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
// -------------- Create Transform Object -----------------

function createObjectTransform(
  ball: BallData,
  object: ContainerState | ObstacleState,
  innerCollision = true
): EllipticalObjectTransform {
  const abMultiplier = innerCollision ? -1 : 1
  let position = [ball.positionX, ball.positionY]
  let lastPosition = [ball.lastPositionX, ball.lastPositionY]
  const radius = ball.radius
  const angle = toRadians(object.angle)
  const a = object.width / 2 + abMultiplier * radius
  const b = object.height / 2 + abMultiplier * radius

  const objectCenter = [
    object.positionX + object.width / 2,
    object.positionY - object.height / 2
  ]

  let containerAngle = 0
  let ballAngle = 0

  function isInside(): boolean | undefined {
    // Move properties to object reference frame
    position = translate(position, [-objectCenter[0], -objectCenter[1]])
    lastPosition = translate(lastPosition, [-objectCenter[0], -objectCenter[1]])

    // Rotate properties to object reference frame
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)

    if (a === 0 || b === 0) return undefined

    const isInside = (position[0] / a) ** 2 + (position[1] / b) ** 2 < 1

    return isInside
  }

  function transform(): EllipticalObjectTransformProps {
    // Compute the intersection point
    let tParameter = 0
    if (position[0] === 0) {
      tParameter = position[1] > 0 ? Math.PI / 2 : (3 * Math.PI) / 2
    } else {
      tParameter = Math.atan2(position[1] * a, position[0] * b)
    }

    const tangentX = -a * Math.sin(tParameter)
    const tangentY = b * Math.cos(tParameter)

    let tangentAngle = Math.PI / 2
    if (tangentX === 0) {
      if (tangentY < 0) tangentAngle *= -1
    } else {
      tangentAngle = Math.atan(tangentY / tangentX)
    }
    ballAngle = Math.atan2(position[1], position[0])
    let intersection = [a * Math.cos(tParameter), b * Math.sin(tParameter)]

    // Rotate the properties to be aligned with the intersection point
    position = rotate(position, -ballAngle)
    lastPosition = rotate(lastPosition, -ballAngle)
    intersection = rotate(intersection, -ballAngle)
    if (isBetween(ballAngle, 0, Math.PI)) tangentAngle -= ballAngle
    if (isBetween(ballAngle, -Math.PI, 0)) tangentAngle -= ballAngle + Math.PI

    // Move the properties so the ball is in the center of the reference frame
    let relativePosition = translate(position, [-position[0], -position[1]])
    let relativeLastPosition = translate(lastPosition, [
      -position[0],
      -position[1]
    ])
    let relativeIntersection = translate(intersection, [
      -position[0],
      -position[1]
    ])

    containerAngle = tangentAngle + Math.PI / 2

    // Rotate the properties so the collision is strictly horizontal
    relativePosition = rotate(relativePosition, -containerAngle)
    relativeLastPosition = rotate(relativeLastPosition, -containerAngle)
    relativeIntersection = rotate(relativeIntersection, -containerAngle)

    const containerDistance =
      Math.sign(relativeIntersection[0]) * Math.hypot(...relativeIntersection)

    return {
      position: [relativePosition[0], relativePosition[1]],
      lastPosition: [relativeLastPosition[0], relativeLastPosition[1]],
      containerDistance
    }
  }

  function undo(
    transformPosition: VectorProperty,
    transformLastPosition: VectorProperty
  ): ObjectProps {
    // Return the properties to the ball reference frame
    const relativePosition = rotate(transformPosition, containerAngle)
    const relativeLastPosition = rotate(transformLastPosition, containerAngle)

    let newPosition = translate(relativePosition, position)
    let newLastPosition = translate(relativeLastPosition, position)

    newPosition = rotate(newPosition, ballAngle)
    newLastPosition = rotate(newLastPosition, ballAngle)

    newPosition = rotate(newPosition, angle)
    newLastPosition = rotate(newLastPosition, angle)

    newPosition = translate(newPosition, [objectCenter[0], objectCenter[1]])
    newLastPosition = translate(newLastPosition, [
      objectCenter[0],
      objectCenter[1]
    ])

    return {
      position: [newPosition[0], newPosition[1]],
      lastPosition: [newLastPosition[0], newLastPosition[1]]
    }
  }

  return {
    isInside,
    transform,
    undo
  }
}
