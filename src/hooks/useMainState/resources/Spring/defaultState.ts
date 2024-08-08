import { linkDefaultState } from "../Link/defaultState"
import type { SpringState, SpringStrength } from "./Spring_types"

export const springStrengthDefaultState: SpringStrength = {
  strength: 5
}

export const springDefaultState: SpringState = {
  ...linkDefaultState,
  ...springStrengthDefaultState,
  linkBall: [],
  type: "spring"
}

export function createSpringState(): SpringState {
  const state = { ...springDefaultState }
  state.id = crypto.randomUUID()

  return state
}
