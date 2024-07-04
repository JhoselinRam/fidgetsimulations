export interface UseBallNumber extends AddBallHooks {
  number: number
  collisionHooks: CollisionHooks
  trajectoryHooks: TrajectoryHooks
}

export interface AddBallHooks {
  addBall: () => void
}

export interface CollisionHooks {
  enableCollision: boolean
  changeCollision: (value: boolean) => void
}

export interface TrajectoryHooks {
  enableTrajectory: boolean
  changeTrajectory: (value: boolean) => void
}
