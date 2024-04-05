import type { CollectionState } from "../../useMainState_types"

export type LocalGravityActionType =
  | "localGravity@new"
  | LocalGravityMagnitudeActionType

export interface LocalGravityState
  extends CollectionState,
    LocalGravityMagnitude {}

export interface LocalGravityElementState {
  localGravity: LocalGravityState[]
}

export type LocalGravityElementType = keyof LocalGravityElementState

export type LocalGravityKeys = keyof LocalGravityState

// --------------------------------------------------------
// -------------------- Magnitude -------------------------

export type LocalGravityMagnitudeActionType =
  | "localGravity@magnitudeX"
  | "localGravity@magnitudeY"

export interface LocalGravityMagnitude {
  magnitudeX: number
  magnitudeY: number
}
