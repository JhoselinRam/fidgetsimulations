import type { SimpleForceMagnitude } from "../SimpleForce/SimpleForce_types"
import type { DampingState } from "./Damping_types"

export const dampingMagnitudeDefaultState: SimpleForceMagnitude = {
  magnitude: 0.01
}

export const dampingDefaultState: DampingState = {
  ...dampingMagnitudeDefaultState,
  id: "",
  name: "",
  type: "damping"
}

export function createDampingState(): DampingState {
  const state = { ...dampingDefaultState }
  state.id = crypto.randomUUID()

  return state
}
