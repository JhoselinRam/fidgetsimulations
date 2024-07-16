import { linkDefaultState } from "../Link/defaultState"
import type { RodState } from "./Rod_types"

export const rodDefaultState: RodState = {
  ...linkDefaultState,
  linkBall: [],
  type: "rod"
}

export function createRodState(): RodState {
  const state = { ...rodDefaultState }
  state.id = crypto.randomUUID()

  return state
}
