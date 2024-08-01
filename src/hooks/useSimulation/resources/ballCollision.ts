import { dot } from "../../../auxiliary/vector"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import type { MainState } from "../../useMainState/useMainState_types"
import type { VectorProperty } from "../useSimulation_types"

export function ballCollision(
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

    // Correct the properties to reflect the collision
    const [positionA, positionB] = correctPositions(ballA, ballB)
    const [velocityA, velocityB] = correctVelocities(
      ballA,
      ballB,
      positionA,
      positionB
    )

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
// --------------------------------------------------------

function correctPositions(
  ballA: BallData,
  ballB: BallData
): [VectorProperty, VectorProperty] {
  const positionA: VectorProperty = [ballA.positionX, ballA.positionY]
  const positionB: VectorProperty = [ballB.positionX, ballB.positionY]
  if (ballA.fixed && ballB.fixed) return [positionA, positionB]

  const minDistance = ballA.radius + ballB.radius
  const distanceVector = [
    ballB.positionX - ballA.positionX,
    ballB.positionY - ballA.positionY
  ]
  const distance = Math.hypot(...distanceVector)
  let fixedCoefficientA = 1
  let fixedCoefficientB = 1

  if (ballA.fixed) {
    fixedCoefficientA = 0
    fixedCoefficientB = 2
  }
  if (ballB.fixed) {
    fixedCoefficientA = 2
    fixedCoefficientB = 0
  }

  const displacement = (minDistance - distance) / 2
  const displacementVector = [
    (distanceVector[0] / distance) * displacement,
    (distanceVector[1] / distance) * displacement
  ]

  positionA[0] -= displacementVector[0] * fixedCoefficientA
  positionA[1] -= displacementVector[1] * fixedCoefficientA
  positionB[0] += displacementVector[0] * fixedCoefficientB
  positionB[1] += displacementVector[1] * fixedCoefficientB

  return [positionA, positionB]
}

// --------------------------------------------------------
// --------------------------------------------------------

function correctVelocities(
  ballA: BallData,
  ballB: BallData,
  positionA: VectorProperty,
  positionB: VectorProperty
): [VectorProperty, VectorProperty] {
  const velocityA: VectorProperty = [ballA.velocityX, ballA.velocityY]
  const velocityB: VectorProperty = [ballB.velocityX, ballB.velocityY]
  if (ballA.fixed && ballB.fixed) return [velocityA, velocityB]

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

  return [velocityA, velocityB]
}

// --------------------------------------------------------
