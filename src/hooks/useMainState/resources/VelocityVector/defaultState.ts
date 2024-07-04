import { vectorDefaultState } from "../Vector/defaultState"
import type { VelocityVectorState } from "./VelocityVector_types"

export function createVelocityVectorState(): VelocityVectorState {
  const state = { ...vectorDefaultState }
  state.id = crypto.randomUUID()
  state.type = "velocityVector"

  return state
}
