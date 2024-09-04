import type { CollectionState } from "../../useMainState_types"

export type SheetActionType =
  | "sheet@new"
  | SheetPositionActionType
  | SheetVelocityActionType
  | SheetBallPropertiesActionType
  | SheetShapeActionType
  | SheetRecursionActionType

export interface SheetState
  extends CollectionState,
    SheetPosition,
    SheetVelocity,
    SheetBallProperties,
    SheetShape,
    SheetRecursion {}

export interface SheetElementState {
  sheet: SheetState[]
}

export type SheetElementType = keyof SheetElementState

export type SheetKeys = keyof SheetState

// --------------------------------------------------------
// ------------------- Position ---------------------------

export type SheetPositionActionType = "sheet@positionX" | "sheet@positionY"

export interface SheetPosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ------------------- Velocity ---------------------------

export type SheetVelocityActionType = "sheet@velocityX" | "sheet@velocityY"

export interface SheetVelocity {
  velocityX: number
  velocityY: number
}

// --------------------------------------------------------
// ---------------- Ball Properties -----------------------

export type SheetBallPropertiesActionType =
  | "sheet@mass"
  | "sheet@charge"
  | "sheet@radius"
  | "sheet@color"

export interface SheetBallProperties {
  mass: number
  charge: number
  radius: number
  color: string
}

// --------------------------------------------------------
// ---------------------- Shape ---------------------------

export type SheetShapeActionType =
  | "sheet@width"
  | "sheet@height"
  | "sheet@columns"
  | "sheet@rows"
  | "sheet@angle"

export interface SheetShape {
  width: number
  height: number
  columns: number
  rows: number
  angle: number
}

// --------------------------------------------------------
// --------------------------------------------------------

export type SheetRecursionActionType = "sheet@recursion"

export interface SheetRecursion {
  recursion: number
}

// --------------------------------------------------------
