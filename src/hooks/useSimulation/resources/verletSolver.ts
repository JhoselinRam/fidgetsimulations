import type { MainState } from "../../useMainState/useMainState_types"

export function verletSolver(state: MainState): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball) => {
    if (ball.fixed) {
      ball.lastPositionX = ball.positionX
      ball.lastPositionY = ball.positionY
      ball.velocityX = 0
      ball.velocityY = 0

      return
    }
    const newX = 2 * ball.positionX - ball.lastPositionX + ball.accelX * dt ** 2
    const newY = 2 * ball.positionY - ball.lastPositionY + ball.accelY * dt ** 2

    ball.lastPositionX = ball.positionX
    ball.lastPositionY = ball.positionY
    ball.velocityX = (newX - ball.positionX) / dt
    ball.velocityY = (newY - ball.positionY) / dt
    ball.positionX = newX
    ball.positionY = newY
  })
}

export function firstStepSolver(state: MainState): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball) => {
    if (ball.fixed) {
      ball.lastPositionX = ball.positionX
      ball.lastPositionY = ball.positionY
      ball.velocityX = 0
      ball.velocityY = 0

      return
    }

    const newX =
      ball.positionX + ball.velocityX * dt + (1 / 2) * ball.accelX * dt ** 2
    const newY =
      ball.positionY + ball.velocityY * dt + (1 / 2) * ball.accelY * dt ** 2

    ball.lastPositionX = ball.positionX
    ball.lastPositionY = ball.positionY
    ball.velocityX = (newX - ball.positionX) / dt
    ball.velocityY = (newY - ball.positionY) / dt
    ball.positionX = newX
    ball.positionY = newY
  })
}
