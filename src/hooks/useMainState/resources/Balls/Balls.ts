import {
  containAllBalls,
  createSimpleSlice,
  generateInnerStateSlice,
  isBallArray,
  isCollection
} from "../../useMainState"
import type { MainState } from "../../useMainState_types"
import type { BallData, BallKeys } from "./Balls_types"
import { ballDataDefaultState } from "./defaultState"

export const ballCollision = createSimpleSlice<BallKeys>("collision", "balls")
export const ballTrajectoryEnable = createSimpleSlice<BallKeys>(
  "trajectoryEnable",
  "balls"
)
export const ballPositionX = generateInnerStateSlice(
  "positionX",
  ballDataDefaultState,
  getBallData
)
export const ballPositionY = generateInnerStateSlice(
  "positionY",
  ballDataDefaultState,
  getBallData
)
export const ballLastPositionX = generateInnerStateSlice(
  "lastPositionX",
  ballDataDefaultState,
  getBallData
)
export const ballLastPositionY = generateInnerStateSlice(
  "lastPositionY",
  ballDataDefaultState,
  getBallData
)
export const ballVelocityX = generateInnerStateSlice(
  "velocityX",
  ballDataDefaultState,
  getBallData
)
export const ballVelocityY = generateInnerStateSlice(
  "velocityY",
  ballDataDefaultState,
  getBallData
)
export const ballAccelX = generateInnerStateSlice(
  "accelX",
  ballDataDefaultState,
  getBallData
)
export const ballAccelY = generateInnerStateSlice(
  "accelY",
  ballDataDefaultState,
  getBallData
)
export const ballMass = generateInnerStateSlice(
  "mass",
  ballDataDefaultState,
  getBallData
)
export const ballRadius = generateInnerStateSlice(
  "radius",
  ballDataDefaultState,
  getBallData
)
export const ballCharge = generateInnerStateSlice(
  "charge",
  ballDataDefaultState,
  getBallData
)
export const ballColor = generateInnerStateSlice(
  "color",
  ballDataDefaultState,
  getBallData
)
export const ballName = generateInnerStateSlice(
  "name",
  ballDataDefaultState,
  getBallData
)
export const ballTrajectoryMatchColor = generateInnerStateSlice(
  "trajectoryMatchColor",
  ballDataDefaultState,
  getBallData
)
export const ballTrajectoryColor = generateInnerStateSlice(
  "trajectoryColor",
  ballDataDefaultState,
  getBallData
)
export const ballTrajectoryFade = generateInnerStateSlice(
  "trajectoryFade",
  ballDataDefaultState,
  getBallData
)
export const ballTrajectoryOpacity = generateInnerStateSlice(
  "trajectoryOpacity",
  ballDataDefaultState,
  getBallData
)
export const ballTrajectoryLength = generateInnerStateSlice(
  "trajectoryLength",
  ballDataDefaultState,
  getBallData
)
export const ballFixed = generateInnerStateSlice(
  "fixed",
  ballDataDefaultState,
  getBallData
)

export function ballNew(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isCollection<BallData>(payload, ballDataDefaultState)) return state
  if (state.balls[0].data.findIndex((ball) => ball.id === payload.id) !== -1)
    return state

  const newState = { ...state }
  newState.balls[0].data.push(payload)

  return newState
}

export function ballDelete(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (payload == null) return state
  if (typeof payload !== "object") return state
  if (!("id" in payload)) return state
  if (typeof payload.id !== "string") return state

  const index = state.balls[0].data.findIndex((ball) => ball.id === payload.id)
  if (index === -1) return state

  const newState = { ...state }
  newState.balls[0].data.splice(index, 1)

  return newState
}

export function ballUpdate(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isCollection<BallData>(payload, ballDataDefaultState)) return state

  const index = state.balls[0].data.findIndex((ball) => ball.id === payload.id)
  if (index === -1) return state

  const newState = { ...state }
  newState.balls[0].data[index] = payload

  return newState
}

export function ballUpdateAll(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isBallArray(payload)) return state
  if (!containAllBalls(payload.data, state)) return state

  const newState = { ...state }
  newState.balls[0].data = payload.data

  return newState
}

function getBallData(state: MainState): BallData[] {
  return state.balls[0].data
}
