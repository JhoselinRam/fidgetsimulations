export interface UseBallNumber extends AddBallHooks {
  number: number
  collisionHooks: CollisionHooks
  velocityVectorHooks: VectorEnableHooks
  accelerationVectorHooks: VectorEnableHooks
}

export interface AddBallHooks {
  addBall: () => void
}

export interface CollisionHooks {
  enableCollision: boolean
  changeCollision: (value: boolean) => void
}

export interface VectorEnableHooks {
  isSelected: boolean
  onChange: (value: boolean) => void
}
