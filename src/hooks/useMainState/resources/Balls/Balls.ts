import {
  containAllBalls,
  createSimpleSlice,
  isBallArray,
  isBallIdentifier,
  isCollection
} from "../../useMainState"
import type { MainState, ReducerSlice } from "../../useMainState_types"
import type { BallData, BallDataKeys, BallKeys } from "./Balls_types"
import { ballDataDefaultState } from "./defaultState"

export const ballCollision = createSimpleSlice<BallKeys>("collision", "balls")
export const ballTrajectoryEnable = createSimpleSlice<BallKeys>(
  "trajectoryEnable",
  "balls"
)
export const ballPositionX = generateBallSlice("positionX")
export const ballPositionY = generateBallSlice("positionY")
export const ballLastPositionX = generateBallSlice("lastPositionX")
export const ballLastPositionY = generateBallSlice("lastPositionY")
export const ballVelocityX = generateBallSlice("velocityX")
export const ballVelocityY = generateBallSlice("velocityY")
export const ballAccelX = generateBallSlice("accelX")
export const ballAccelY = generateBallSlice("accelY")
export const ballMass = generateBallSlice("mass")
export const ballRadius = generateBallSlice("radius")
export const ballCharge = generateBallSlice("charge")
export const ballColor = generateBallSlice("color")
export const ballName = generateBallSlice("name")
export const ballTrajectoryMatchColor = generateBallSlice(
  "trajectoryMatchColor"
)
export const ballTrajectoryColor = generateBallSlice("trajectoryColor")
export const ballTrajectoryFade = generateBallSlice("trajectoryFade")
export const ballTrajectoryOpacity = generateBallSlice("trajectoryOpacity")
export const ballTrajectoryLength = generateBallSlice("trajectoryLength")

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

// ---------------- Generator function --------------------

function generateBallSlice(key: BallDataKeys): ReducerSlice {
  return (state, payload) => {
    if (!isBallIdentifier(payload, key)) return state

    const index = state.balls[0].data.findIndex(
      (ball) => ball.id === payload.id
    )
    if (index === -1) return state
    if (state.balls[0].data[index][key] === payload[key]) return state

    const newState = { ...state }
    ;(newState.balls[0].data[index][key] as unknown) = payload[key]

    return newState
  }
}

// --------------------------------------------------------
