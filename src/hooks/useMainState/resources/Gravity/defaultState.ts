import type { SimpleForceMagnitude } from "../SimpleForce/SimpleForce_types"
import type { GravityState } from "./Gravity_types"

export const gravityMagnitudeDefaultState: SimpleForceMagnitude = {
  magnitude: 6.6743e-11
}

export const gravityDefaultState: GravityState = {
  ...gravityMagnitudeDefaultState,
  id: "",
  name: "",
  type: "gravity"
}

export function createGravityState(): GravityState {
  const state = { ...gravityDefaultState }
  state.id = crypto.randomUUID()

  return state
}
