import type { LinkState } from "../Link/Link_types"

export type RodActionType = "rod@new"

export interface RodState extends LinkState {}

export interface RodElementState {
  rod: RodState[]
}

export type RodElementType = keyof RodElementState
