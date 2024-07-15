import { linkDefaultState } from "../Link/defaultState"
import type { SpringState, SpringStrength } from "./Spring_types"

export const springStrengthDefaultState: SpringStrength = {
  strength: 1
}

export const springDefaultState: SpringState = {
  ...linkDefaultState,
  ...springStrengthDefaultState
}
