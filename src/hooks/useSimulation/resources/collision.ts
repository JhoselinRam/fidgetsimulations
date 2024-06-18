import { dot } from "../../../auxiliary/vector"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import type { MainState } from "../../useMainState/useMainState_types"
import {
  ellipticalCollision,
  ellipticalObstacleCollision
} from "./ellipticalObject"
import {
  rectangularCollision,
  rectangularObstacleCollision
} from "./rectangularObject"

// --------------------------------------------------------

export function computeCollision(state: MainState): void {
  // computeBallCollision(state)
  // containerCollision(state)

  const ballNumber = state.balls[0].data.length

  for (let i = 0; i < ballNumber; i++) {
    const ball = state.balls[0].data[i]

    if (state.balls[0].collision) ballCollision(i, state, ballNumber)
    containerCollision(ball, state)
    obstacleCollision(ball, state)
  }
}

// --------------------------------------------------------
// ------------------ Ball Collision ----------------------

function ballCollision(
  index: number,
  state: MainState,
  ballNumber: number
): void {
  if (index === ballNumber - 1) return

  for (let j = index + 1; j < ballNumber; j++) {
    const ballA = state.balls[0].data[index]
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

// --------------------------------------------------------
// --------------- Container Collision --------------------

function containerCollision(ball: BallData, state: MainState): void {
  const dt = state.time.dt / 1000

  state.container.forEach((container) => {
    if (container.shape === "rectangle")
      rectangularCollision(ball, container, dt)

    if (container.shape === "ellipse") ellipticalCollision(ball, container, dt)
  })
}

// --------------------------------------------------------
// ---------------- Obstacle Collision --------------------

function obstacleCollision(ball: BallData, state: MainState): void {
  const dt = state.time.dt / 1000

  state.obstacle.forEach((obstacle) => {
    if (obstacle.shape === "rectangle")
      rectangularObstacleCollision(ball, obstacle, dt)

    if (obstacle.shape === "ellipse")
      ellipticalObstacleCollision(ball, obstacle, dt)
  })
}

// --------------------------------------------------------
