import type { CollectionState } from "../../useMainState_types"

export type BallActionType =
  | "balls@new"
  | "balls@delete"
  | "ball@update"
  | "ball@updateAll"
  | BallCollisionActionType
  | BallTrajectoryEnableActionType
  | BallPositionActionType
  | BallVelocityActionType
  | BallAccelActionType
  | BallMassActionType
  | BallRadiusActionType
  | BallChargeActionType
  | BallNameActionType
  | BallColorActionType
  | BallTrajectoryActionType

export interface BallElementState {
  balls: BallState[]
}

export type BallElementType = keyof BallElementState

export type BallKeys = keyof BallState

export interface BallState
  extends CollectionState,
    BallCollision,
    BallTrajectoryEnable {
  data: BallData[]
}

export interface BallData
  extends BallPosition,
    BallVelocity,
    BallAccel,
    BallMass,
    BallRadius,
    BallCharge,
    BallColor,
    BallName,
    BallTrajectory {
  id: string
}

export type BallDataKeys = keyof BallData

// --------------------------------------------------------
// -------------------- Collision -------------------------

export type BallCollisionActionType = "balls@collision"

export interface BallCollision {
  collision: boolean
}

// --------------------------------------------------------
// ------------------- Trajectory -------------------------

export type BallTrajectoryEnableActionType = "balls@trajectoryEnable"

export interface BallTrajectoryEnable {
  trajectoryEnable: boolean
}

// --------------------------------------------------------
// -------------------- Position --------------------------

export type BallPositionActionType =
  | "balls@positionX"
  | "balls@positionY"
  | "balls@lastPositionX"
  | "balls@lastPositionY"

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
  name: string
}

// --------------------------------------------------------
// --------------------- Color ----------------------------

export type BallColorActionType = "balls@color"

export interface BallColor {
  color: string
}

// --------------------------------------------------------
// --------------------------------------------------------

export type BallTrajectoryActionType =
  | "balls@trajectoryMatchColor"
  | "balls@trajectoryColor"
  | "balls@trajectoryFade"
  | "balls@trajectoryOpacity"
  | "balls@trajectoryLength"

export interface BallTrajectory {
  trajectoryMatchColor: boolean
  trajectoryColor: string
  trajectoryFade: boolean
  trajectoryOpacity: number
  trajectoryLength: number
}

// --------------------------------------------------------
