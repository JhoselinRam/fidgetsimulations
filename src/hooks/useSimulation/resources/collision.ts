import { toDegrees, toRadians } from "../../../auxiliary/angleAux"
import { dot, rotate, translate } from "../../../auxiliary/vector"
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
// --------------- Container Collision --------------------

function containerCollision(state: MainState): void {
  state.container.forEach((container) => {
    if (container.shape === "rectangle")
      rectangularContainerCollision(container, state)

    if (container.shape === "ellipse")
      ellipticalContainerCollision(container, state)
  })
}

// --------------------------------------------------------
// -------------- Rectangular Container -------------------

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
    let containerTL = [container.positionX, container.positionY]
    let containerBR = [
      container.positionX + container.width,
      container.positionY - container.height
    ]

    const containerCenter = [
      container.positionX + container.width / 2,
      container.positionY - container.height / 2
    ]

    // Move properties to container reference frame
    const translation = [-containerCenter[0], -containerCenter[1]]
    position = translate(position, translation)
    lastPosition = translate(lastPosition, translation)
    containerTL = translate(containerTL, translation)
    containerBR = translate(containerBR, translation)

    // Rotate properties to container reference frame
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)
    velocity = rotate(velocity, -angle)

    // Check for collision
    if (position[0] - radius < containerTL[0]) {
      const diff = Math.abs(position[0] - lastPosition[0])
      position[0] = containerTL[0] + radius
      lastPosition[0] = position[0] - diff
      velocity[0] = (position[0] - lastPosition[0]) / dt
    }

    if (position[0] + radius > containerBR[0]) {
      const diff = Math.abs(position[0] - lastPosition[0])
      position[0] = containerBR[0] - radius
      lastPosition[0] = position[0] + diff
      velocity[0] = (position[0] - lastPosition[0]) / dt
    }

    if (position[1] + radius > containerTL[1]) {
      const diff = Math.abs(position[1] - lastPosition[1])
      position[1] = containerTL[1] - radius
      lastPosition[1] = position[1] + diff
      velocity[1] = (position[1] - lastPosition[1]) / dt
    }

    if (position[1] - radius < containerBR[1]) {
      const diff = Math.abs(position[1] - lastPosition[1])
      position[1] = containerBR[1] + radius
      lastPosition[1] = position[1] - diff
      velocity[1] = (position[1] - lastPosition[1]) / dt
    }

    // Return properties to the ball reference frame
    position = rotate(position, angle)
    lastPosition = rotate(lastPosition, angle)
    velocity = rotate(velocity, angle)

    position = translate(position, containerCenter)
    lastPosition = translate(lastPosition, containerCenter)

    // Update ball properties
    ball.positionX = position[0]
    ball.positionY = position[1]
    ball.lastPositionX = lastPosition[0]
    ball.lastPositionY = lastPosition[1]
    ball.velocityX = velocity[0]
    ball.velocityY = velocity[1]
  })
}

// --------------------------------------------------------
// --------------------------------------------------------

function ellipticalContainerCollision(
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
    const a = container.width / 2
    const b = container.height / 2

    const containerCenter = [
      container.positionX + container.width / 2,
      container.positionY - container.height / 2
    ]

    // Move properties to container reference frame
    const translation = [-containerCenter[0], -containerCenter[1]]
    position = translate(position, translation)
    lastPosition = translate(lastPosition, translation)

    // Rotate properties to container reference frame
    position = rotate(position, -angle)
    lastPosition = rotate(lastPosition, -angle)
    velocity = rotate(velocity, -angle)

    // Check if ball is outside the container
    if (a - radius === 0 || b - radius === 0) return
    const isInside =
      (position[0] / (a - radius)) ** 2 + (position[1] / (b - radius)) ** 2 < 1
    if (isInside) return

    let tParameter = 0
    if (position[0] === 0) {
      if (position[1] > 0) tParameter = Math.PI / 2

      tParameter = (3 * Math.PI) / 2
    } else {
      tParameter = Math.atan2(position[1] * a, position[0] * b)
    }

    const tangentX = -a * Math.sin(tParameter)
    const tangentY = b * Math.cos(tParameter)
    const tangentAngle = Math.atan2(tangentY, tangentX)

    console.log(
      toDegrees(tangentAngle),
      toDegrees(Math.atan(tangentY / tangentX))
    )
  })
}

// --------------------------------------------------------
