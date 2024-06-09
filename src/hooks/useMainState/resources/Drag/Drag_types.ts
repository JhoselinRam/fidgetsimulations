import type { SimpleForceState } from "../SimpleForce/SimpleForce_types"

export type DragActionType = "drag@new" | DragDensityActionType

export interface DragState extends SimpleForceState, DragDensity {}

export type DragKeys = keyof DragState

// --------------------------------------------------------

export type DragDensityActionType = "drag@density"

export interface DragDensity {
  density: number
}

// --------------------------------------------------------
