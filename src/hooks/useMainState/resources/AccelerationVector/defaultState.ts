import { vectorDefaultState } from "../Vector/defaultState"
import type { AccelerationVectorState } from "./AccelerationVector_types"

export function createAccelerationVectorState(): AccelerationVectorState {
  const state = { ...vectorDefaultState }
  state.id = crypto.randomUUID()
  state.type = "accelerationVector"

  return state
}
