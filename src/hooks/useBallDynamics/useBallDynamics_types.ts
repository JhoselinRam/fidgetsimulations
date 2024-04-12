export interface UseBallDynamics {
  positionHooks: BallDynamicsHooks
}

export interface BallDynamicsHooks {
  valueX: number
  changeValueX: (value: number) => void
  valueY: number
  changeValueY: (value: number) => void
}
