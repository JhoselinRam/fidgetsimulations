import type { CollectionState } from "../../useMainState_types"

export type RopeActionType =
  | "rope@new"
  | RopePositionActionType
  | RopeShapeActionType
  | RopePropertiesActionType

export interface RopeState
  extends CollectionState,
    RopePosition,
    RopeShape,
    RopeProperties {}

export interface RopeElementState {
  rope: RopeState[]
}

export type RopeElementType = keyof RopeElementState

export type RopeKeys = keyof RopeState

// --------------------------------------------------------
// --------------------- Position -------------------------

export type RopePositionActionType = "rope@positionX" | "rope@positionY"

export interface RopePosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ----------------------- Shape --------------------------

export type RopeShapeActionType = "rope@length" | "rope@angle" | "rope@nodes"

export interface RopeShape {
  length: number
  angle: number
  nodes: number
}

// --------------------------------------------------------
// --------------------- Properties -----------------------

export type RopePropertiesActionType = "rope@rod" | "rod@balls"

export interface RopeProperties {
  rod: string
  balls: string[]
}

// --------------------------------------------------------
