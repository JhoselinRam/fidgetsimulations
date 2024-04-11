export interface UseBallNumber extends AddBallHooks {
  number: number
  addBall: () => void
}

export interface AddBallHooks {
  addBall: () => void
}
