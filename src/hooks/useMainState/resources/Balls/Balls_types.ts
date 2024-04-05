import type { CollectionState } from "../../useMainState_types"

export type BallActionType =
  | "balls@new"
  | BallPositionActionType
  | BallVelocityActionType
  | BallAccelActionType
  | BallMassActionType
  | BallRadiusActionType
  | BallChargeActionType
  | BallNameActionType
  | BallColorActionType

export interface BallElementState {
  balls: BallState[]
}

export type BallElementType = keyof BallElementState

export interface BallState extends CollectionState, BallCollision {
  data: BallData[]
}

export interface BallData
  extends BallPosition,
    BallVelocity,
    BallAccel,
    BallMass,
    BallRadius,
    BallCharge,
    BallColor {
  id: string
}

// --------------------------------------------------------
// -------------------- Collision -------------------------

export type BallCollisionActionType = "balls@collision"

export interface BallCollision {
  collision: boolean
}

// --------------------------------------------------------
// -------------------- Position --------------------------

export type BallPositionActionType =
  | "balls@positionX"
  | "balls@positionY"
  | "balls@LastPositionX"
  | "balls@LastPositionY"

export interface BallPosition {
  positionX: number
  positionY: number
  lastPositionX: number
  lastPositionY: number
}

// --------------------------------------------------------
// -------------------- Velocity --------------------------

export type BallVelocityActionType = "balls@velocityX" | "balls@velocityY"

export interface BallVelocity {
  velocityX: number
  velocityY: number
}

// --------------------------------------------------------
// ------------------ Acceleration ------------------------

export type BallAccelActionType = "balls@accelX" | "balls@accelY"

export interface BallAccel {
  accelX: number
  accelY: number
}

// ---------------------- Mass ----------------------------
// --------------------------------------------------------

export type BallMassActionType = "balls@mass"

export interface BallMass {
  mass: number
}

// ---------------------- Radius --------------------------
// --------------------------------------------------------

export type BallRadiusActionType = "balls@radius"

export interface BallRadius {
  radius: number
}

// --------------------------------------------------------
// --------------------- Charge ---------------------------

export type BallChargeActionType = "balls@charge"

export interface BallCharge {
  charge: number
}

// --------------------------------------------------------
// ---------------------- Name ----------------------------

export type BallNameActionType = "balls@name"

export interface BallName {
  name: number
}

// --------------------------------------------------------
// --------------------- Color ----------------------------

export type BallColorActionType = "balls@color"

export interface BallColor {
  color: string
}

// --------------------------------------------------------