export interface UseBallNumber extends AddBallHooks {
  number: number
  collisionHooks: CollisionHooks
}

export interface AddBallHooks {
  addBall: () => void
}

export interface CollisionHooks {
  enableCollision: boolean
  changeCollision: (value: boolean) => void
}
