import { toRadians } from "../../../auxiliary/angleAux"
import { rotate, translate } from "../../../auxiliary/vector"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import type { ContainerState } from "../../useMainState/resources/Container/Container_types"
import type {
  ContainerProps,
  RectangularContainerTransform,
  RectangularContainerTransformProps,
  VectorProperty
} from "../useSimulation_types"

export function rectangularCollision(
  ball: BallData,
  container: ContainerState,
  dt: number
): void {
  const radius = ball.radius
  const containerTransform = createContainerTransform(ball, container)
  const { position, lastPosition, containerX, containerY } =
    containerTransform.transform()

  // Check for collision
  if (position[0] - radius < containerX[0]) {
    const diff = Math.abs(position[0] - lastPosition[0])
    position[0] = containerX[0] + radius
    lastPosition[0] = position[0] - diff
  }

  if (position[0] + radius > containerX[1]) {
    const diff = Math.abs(position[0] - lastPosition[0])
    position[0] = containerX[1] - radius
    lastPosition[0] = position[0] + diff
  }

  if (position[1] + radius > containerY[0]) {
    const diff = Math.abs(position[1] - lastPosition[1])
    position[1] = containerY[0] - radius
    lastPosition[1] = position[1] + diff
  }

  if (position[1] - radius < containerY[1]) {
    const diff = Math.abs(position[1] - lastPosition[1])
    position[1] = containerY[1] + radius
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

function createContainerTransform(
  ball: BallData,
  container: ContainerState
): RectangularContainerTransform {
  let position = [ball.positionX, ball.positionY]
  let lastPosition = [ball.lastPositionX, ball.lastPositionY]
  const angle = toRadians(container.angle)
  let containerTL = [container.positionX, container.positionY]
  let containerBR = [
    container.positionX + container.width,
    container.positionY - container.height
  ]

  const containerCenter = [
    container.positionX + container.width / 2,
    container.positionY - container.height / 2
  ]

  function transform(): RectangularContainerTransformProps {
    // Move properties to container reference frame
    const translation = [-containerCenter[0], -containerCenter[1]]
    position = translate(position, translation)
    lastPosition = translate(lastPosition, translation)
    containerTL = translate(containerTL, translation)
    containerBR = translate(containerBR, translation)

    // Rotate properties to container reference frame
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)

    return {
      position: [position[0], position[1]],
      lastPosition: [lastPosition[0], lastPosition[1]],
      containerX: [containerTL[0], containerBR[0]],
      containerY: [containerTL[1], containerBR[1]]
    }
  }

  function undo(
    transformPosition: VectorProperty,
    transformLastPosition: VectorProperty
  ): ContainerProps {
    // Return properties to the ball reference frame
    let newPosition = rotate(transformPosition, angle)
    let newLastPosition = rotate(transformLastPosition, angle)

    newPosition = translate(newPosition, containerCenter)
    newLastPosition = translate(newLastPosition, containerCenter)

    return {
      position: [newPosition[0], newPosition[1]],
      lastPosition: [newLastPosition[0], newLastPosition[1]]
    }
  }

  return { transform, undo }
}

// --------------------------------------------------------
