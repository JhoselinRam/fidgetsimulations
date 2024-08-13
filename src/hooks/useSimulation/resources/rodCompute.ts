import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import type { RodState } from "../../useMainState/resources/Rod/Rod_types"
import type { MainState } from "../../useMainState/useMainState_types"

// --------------------------------------------------------
// -------------- Main update function --------------------

export function computeRodLink(state: MainState): void {
  state.rod.forEach((rod) => {
    for (let i = 0; i < rod.recursion; i++) {
      updateRod(rod, state)
    }
  })
}

// --------------------------------------------------------
// ------------------ Update Rod --------------------------

function updateRod(rod: RodState, state: MainState): void {
  rod.linkBall.forEach((pair) => {
    const ballA = state.balls[0].data.find((element) => element.id === pair[0])
    const ballB = state.balls[0].data.find((element) => element.id === pair[1])

    if (ballA == null || ballB == null) return
    if (ballA.fixed && ballB.fixed) return

    correctPositions(rod, ballA, ballB)
  })
}

// --------------------------------------------------------
// ----------------- Correct Positions --------------------

function correctPositions(
  rod: RodState,
  ballA: BallData,
  ballB: BallData
): void {
  const diffVector = [
    ballB.positionX - ballA.positionX,
    ballB.positionY - ballA.positionY
  ]
  const distance = Math.hypot(...diffVector)
  const displacement = distance - rod.length

  let ratioCoefficientA = 1 - ballA.mass / (ballA.mass + ballB.mass)
  let ratioCoefficientB = 1 - ballB.mass / (ballA.mass + ballB.mass)

  if (ballA.fixed) {
    ratioCoefficientA = 0
    ratioCoefficientB = 1
  }
  if (ballB.fixed) {
    ratioCoefficientA = 1
    ratioCoefficientB = 0
  }

  ballA.positionX +=
    (displacement * ratioCoefficientA * diffVector[0]) / distance
  ballA.positionY +=
    (displacement * ratioCoefficientA * diffVector[1]) / distance
  ballB.positionX -=
    (displacement * ratioCoefficientB * diffVector[0]) / distance
  ballB.positionY -=
    (displacement * ratioCoefficientB * diffVector[1]) / distance
}

// --------------------------------------------------------
