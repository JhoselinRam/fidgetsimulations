import type { MainState } from "../../useMainState/useMainState_types"

export function verletSolver(state: MainState): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball, index) => {
    const newX = 2 * ball.positionX - ball.lastPositionX + ball.accelX * dt ** 2
    const newY = 2 * ball.positionY - ball.lastPositionY + ball.accelY * dt ** 2

    state.balls[0].data[index].lastPositionX = ball.positionX
    state.balls[0].data[index].lastPositionY = ball.positionY
    state.balls[0].data[index].velocityX = (newX - ball.positionX) / dt
    state.balls[0].data[index].velocityY = (newY - ball.positionY) / dt
    state.balls[0].data[index].positionX = newX
    state.balls[0].data[index].positionY = newY
  })
}

export function firstStepSolver(state: MainState): void {
  const dt = state.time.dt / 1000

  state.balls[0].data.forEach((ball, index) => {
    const newX =
      ball.positionX + ball.velocityX * dt + (1 / 2) * ball.accelX * dt ** 2
    const newY =
      ball.positionY + ball.velocityY * dt + (1 / 2) * ball.accelY * dt ** 2

    state.balls[0].data[index].lastPositionX = ball.positionX
    state.balls[0].data[index].lastPositionY = ball.positionY
    state.balls[0].data[index].velocityX = (newX - ball.positionX) / dt
    state.balls[0].data[index].velocityY = (newY - ball.positionY) / dt
    state.balls[0].data[index].positionX = newX
    state.balls[0].data[index].positionY = newY
  })
}
