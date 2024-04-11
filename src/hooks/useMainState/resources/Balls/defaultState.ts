import { randomBetween } from "../../../../auxiliary/randomBetween"
import {
  containerPositionDefaultState,
  containerSizeDefaultState
} from "../Container/defaultState"
import type {
  BallAccel,
  BallCharge,
  BallCollision,
  BallColor,
  BallData,
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
  charge: 0.001
}

export const ballColorDefaultState: BallColor = {
  color: "#0000ff"
}

export const ballDataDefaultState: BallData = {
  ...ballPositionDefaultState,
  ...ballVelocityDefaultState,
  ...ballAccelDefaultState,
  ...ballMassDefaultState,
  ...ballRadiusDefaultState,
  ...ballChargeDefaultState,
  ...ballColorDefaultState,
  id: "",
  name: ""
}

export const ballDefaultState: BallState = {
  type: "balls",
  id: "balls",
  name: "Balls",
  ...ballCollisionDefaultState,
  data: [
    {
      ...ballDataDefaultState,
      id: crypto.randomUUID(),
      name: "Ball 1"
    }
  ]
}

export function createBallState(): BallData {
  const state = { ...ballDataDefaultState }

  const minPositionX = containerPositionDefaultState.positionX + state.radius
  const maxPositionX =
    containerPositionDefaultState.positionX +
    containerSizeDefaultState.width -
    state.radius
  const minPositionY = containerPositionDefaultState.positionY - state.radius
  const maxPositionY =
    containerPositionDefaultState.positionY -
    containerSizeDefaultState.height +
    state.radius

  state.id = crypto.randomUUID()
  state.positionX = randomBetween(minPositionX, maxPositionX)
  state.positionY = randomBetween(minPositionY, maxPositionY)
  state.lastPositionX = state.positionX
  state.lastPositionY = state.positionY

  return state
}
