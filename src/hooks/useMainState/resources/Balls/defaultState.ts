import type {
  BallAccel,
  BallCharge,
  BallCollision,
  BallColor,
  BallMass,
  BallPosition,
  BallRadius,
  BallState,
  BallVelocity
} from "./Balls_types"

export const ballCollisionDefaultState: BallCollision = {
  collision: true
}

export const ballPositionDefaultState: BallPosition = {
  positionX: 0,
  positionY: 0,
  lastPositionX: 0,
  lastPositionY: 0
}

export const ballVelocityDefaultState: BallVelocity = {
  velocityX: 0,
  velocityY: 0
}

export const ballAccelDefaultState: BallAccel = {
  accelX: 0,
  accelY: 0
}

export const ballMassDefaultState: BallMass = {
  mass: 1
}

export const ballRadiusDefaultState: BallRadius = {
  radius: 0.3
}

export const ballChargeDefaultState: BallCharge = {
  charge: 0.1
}

export const ballColorDefaultState: BallColor = {
  color: "#0000ff"
}

export const ballDefaultState: BallState = {
  type: "balls",
  id: "balls",
  name: "Balls",
  ...ballCollisionDefaultState,
  data: [
    {
      ...ballPositionDefaultState,
      ...ballVelocityDefaultState,
      ...ballAccelDefaultState,
      ...ballMassDefaultState,
      ...ballRadiusDefaultState,
      ...ballChargeDefaultState,
      ...ballColorDefaultState,
      id: crypto.randomUUID()
    }
  ]
}
