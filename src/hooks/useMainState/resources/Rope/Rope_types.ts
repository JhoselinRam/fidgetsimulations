import type { CollectionState } from "../../useMainState_types"

export type RopeActionType =
  | "rope@new"
  | RopePositionActionType
  | RopeShapeActionType
  | RopeVelocityActionType
  | RopeRadiusActionType
  | RopeColorActionType
  | RopeMassActionType
  | RopeChargeActionType

export interface RopeState
  extends CollectionState,
    RopePosition,
    RopeShape,
    RopeVelocity,
    RopeMass,
    RopeRadius,
    RopeColor,
    RopeCharge {}

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
// -------------------- Velocity --------------------------

export type RopeVelocityActionType = "rope@velocityX" | "rope@velocityY"

export interface RopeVelocity {
  velocityX: number
  velocityY: number
}

// ---------------------- Mass ----------------------------
// --------------------------------------------------------

export type RopeMassActionType = "rope@mass"

export interface RopeMass {
  mass: number
}

// --------------------------------------------------------
// -------------------- Radius ----------------------------

export type RopeRadiusActionType = "rope@radius"

export interface RopeRadius {
  radius: number
}

// -------------------- Charge ----------------------------
// --------------------------------------------------------

export type RopeChargeActionType = "rope@charge"

export interface RopeCharge {
  charge: number
}

// --------------------------------------------------------
// --------------------- Color ----------------------------

export type RopeColorActionType = "rope@color"

export interface RopeColor {
  color: string
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
