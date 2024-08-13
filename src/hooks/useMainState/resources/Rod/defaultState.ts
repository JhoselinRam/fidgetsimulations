import { linkDefaultState } from "../Link/defaultState"
import type { RodState, RodRecursion } from "./Rod_types"

export const rodRecursionDefaultState: RodRecursion = {
  recursion: 1
}

export const rodDefaultState: RodState = {
  ...linkDefaultState,
  ...rodRecursionDefaultState,
  linkBall: [],
  type: "rod"
}

export function createRodState(): RodState {
  const state = { ...rodDefaultState }
  state.id = crypto.randomUUID()

  return state
}
