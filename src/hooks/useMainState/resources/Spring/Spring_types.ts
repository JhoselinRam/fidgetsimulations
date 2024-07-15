import type { LinkState } from "../Link/Link_types"

export type SpringActionType = "spring@new" | SpringStrengthActionType

export interface SpringState extends LinkState, SpringStrength {}

export interface SpringElementState {
  spring: SpringState
}

export type SpringElementType = keyof SpringElementState

// --------------------------------------------------------
// --------------------------------------------------------

export type SpringStrengthActionType = "spring@strength"

export interface SpringStrength {
  strength: number
}

// --------------------------------------------------------
