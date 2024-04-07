import type { CollectionState } from "../../useMainState_types"
import type { DragState } from "../Drag/Drag_types"
import type { ElectricState } from "../Electric/Electric_types"
import type { GravityState } from "../Gravity/Gravity_types"

export type SimpleForceActionType = SimpleForceMagnitudeActionType

export type SimpleForceElementType = keyof SimpleForceElementState

export interface SimpleForceElementState {
  gravity: GravityState[]
  drag: DragState[]
  electric: ElectricState[]
}

export interface SimpleForceState
  extends CollectionState,
    SimpleForceMagnitude {}

export type SimpleForceKeys = keyof SimpleForceState

// --------------------------------------------------------
// -------------------- Magnitude -------------------------

export type SimpleForceMagnitudeActionType = "simpleForce@magnitude"

export interface SimpleForceMagnitude {
  magnitude: number
}

// --------------------------------------------------------
