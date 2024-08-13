import type { LinkState } from "../Link/Link_types"

export type RodActionType = "rod@new" | RodRecursionActionType

export interface RodState extends LinkState, RodRecursion {}

export interface RodElementState {
  rod: RodState[]
}

export type RodElementType = keyof RodElementState

export type RodKeys = keyof RodRecursion

// --------------------------------------------------------
// ------------------- Recursion --------------------------

export type RodRecursionActionType = "rod@recursion"

export interface RodRecursion {
  recursion: number
}

// --------------------------------------------------------
