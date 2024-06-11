import { toRadians } from "../../../auxiliary/angleAux"
import { dot, rotate } from "../../../auxiliary/vector"
import type { ContainerState } from "../../useMainState/resources/Container/Container_types"
import type { MainState } from "../../useMainState/useMainState_types"

// --------------------------------------------------------

export function computeCollision(state: MainState): void {
  computeBallCollision(state)
  containerCollision(state)
}

// --------------------------------------------------------
// ------------------ Ball Collision ----------------------

function computeBallCollision(state: MainState): void {
  if (!state.balls[0].collision) return

  const ballNumber = state.balls[0].data.length

  for (let i = 0; i < ballNumber - 1; i++) {
    for (let j = i + 1; j < ballNumber; j++) {
      const ballA = state.balls[0].data[i]
      const ballB = state.balls[0].data[j]
      const minDistance = ballA.radius + ballB.radius
      const distanceVector = [
        ballB.positionX - ballA.positionX,
        ballB.positionY - ballA.positionY
      ]
      const distance = Math.hypot(...distanceVector)

      // If there is no collision, compare the next pair
      if (distance > minDistance) continue
      const dt = state.time.dt / 1000

      // Record the positions and velocities at the moment of impact
      const positionA = [ballA.positionX, ballA.positionY]
      const positionB = [ballB.positionX, ballB.positionY]
      const velocityA = [ballA.velocityX, ballA.velocityY]
      const velocityB = [ballB.velocityX, ballB.velocityY]

      // Correct the positions so the balls don´t pass through one another
      const displacement = (minDistance - distance) / 2
      const displacementVector = [
        (distanceVector[0] / distance) * displacement,
        (distanceVector[1] / distance) * displacement
      ]

      positionA[0] -= displacementVector[0]
      positionA[1] -= displacementVector[1]
      positionB[0] += displacementVector[0]
      positionB[1] += displacementVector[1]

      // Correct the velocities to reflect the collision
      const velocityDiffA = [
        velocityA[0] - velocityB[0],
        velocityA[1] - velocityB[1]
      ]
      const positionDiffA = [
        positionA[0] - positionB[0],
        positionA[1] - positionB[1]
      ]
      const compoundMassA = (2 * ballB.mass) / (ballA.mass + ballB.mass)
      const coefficientA =
        (compoundMassA * dot(velocityDiffA, positionDiffA)) /
        Math.hypot(...positionDiffA) ** 2

      const velocityDiffB = [
        velocityB[0] - velocityA[0],
        velocityB[1] - velocityA[1]
      ]
      const positionDiffB = [
        positionB[0] - positionA[0],
        positionB[1] - positionA[1]
      ]
      const compoundMassB = (2 * ballA.mass) / (ballA.mass + ballB.mass)
      const coefficientB =
        (compoundMassB * dot(velocityDiffB, positionDiffB)) /
        Math.hypot(...positionDiffB) ** 2

      velocityA[0] -= coefficientA * positionDiffA[0]
      velocityA[1] -= coefficientA * positionDiffA[1]
      velocityB[0] -= coefficientB * positionDiffB[0]
      velocityB[1] -= coefficientB * positionDiffB[1]

      // Update the balls properties in the state
      ballA.positionX = positionA[0]
      ballA.positionY = positionA[1]
      ballA.velocityX = velocityA[0]
      ballA.velocityY = velocityA[1]
      ballA.lastPositionX = positionA[0] - velocityA[0] * dt
      ballA.lastPositionY = positionA[1] - velocityA[1] * dt

      ballB.positionX = positionB[0]
      ballB.positionY = positionB[1]
      ballB.velocityX = velocityB[0]
      ballB.velocityY = velocityB[1]
      ballB.lastPositionX = positionB[0] - velocityB[0] * dt
      ballB.lastPositionY = positionB[1] - velocityB[1] * dt
    }
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function containerCollision(state: MainState): void {
  state.container.forEach((container) => {
    if (container.shape === "rectangle") {
      rectangularContainerCollision(container, state)
    }
  })
}

function rectangularContainerCollision(
  container: ContainerState,
  state: MainState
): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball) => {
    // Record the relevant properties
    let position = [ball.positionX, ball.positionY]
    let lastPosition = [ball.lastPositionX, ball.lastPositionY]
    let velocity = [ball.velocityX, ball.velocityY]
    const radius = ball.radius
    const angle = toRadians(container.angle)

    // Transform the properties into the container space
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)
    velocity = rotate(velocity, -angle)

    const containerRealCenter = [
      container.positionX + container.width / 2,
      container.positionY - container.height / 2
    ]
    const containerSpaceCenter = rotate(containerRealCenter, angle)
    const containerCenterDiff = rotate(
      [
        containerSpaceCenter[0] - containerRealCenter[0],
        containerSpaceCenter[1] - containerRealCenter[1]
      ],
      -angle
    )

    const containerX = [
      container.positionX - containerCenterDiff[0],
      container.positionX + container.width - containerCenterDiff[0]
    ]
    const containerY = [
      container.positionY - containerCenterDiff[1],
      container.positionY - container.height - containerCenterDiff[1]
    ]

    // Check for collisions on the container space
    if (position[0] - radius < containerX[0]) {
      const diff = Math.abs(position[0] - lastPosition[0])
      position[0] = containerX[0] + radius
      lastPosition[0] = position[0] - diff
      velocity[0] = (position[0] - lastPosition[0]) / dt
    }

    if (position[0] + radius > containerX[1]) {
      const diff = Math.abs(position[0] - lastPosition[0])
      position[0] = containerX[1] - radius
      lastPosition[0] = position[0] + diff
      velocity[0] = (position[0] - lastPosition[0]) / dt
    }

    if (position[1] + radius > containerY[0]) {
      const diff = Math.abs(position[1] - lastPosition[1])
      position[1] = containerY[0] - radius
      lastPosition[1] = position[1] + diff
      velocity[1] = (position[1] - lastPosition[1]) / dt
    }

    if (position[1] - radius < containerY[1]) {
      const diff = Math.abs(position[1] - lastPosition[1])
      position[1] = containerY[1] + radius
      lastPosition[1] = position[1] - diff
      velocity[1] = (position[1] - lastPosition[1]) / dt
    }

    // Return the properties to regular space and update the ball
    position = rotate(position, angle)
    lastPosition = rotate(lastPosition, angle)
    velocity = rotate(velocity, angle)

    ball.positionX = position[0]
    ball.positionY = position[1]
    ball.lastPositionX = lastPosition[0]
    ball.lastPositionY = lastPosition[1]
    ball.velocityX = velocity[0]
    ball.velocityY = velocity[1]
  })
}

// --------------------------------------------------------
