import type { CollectionState } from "../../useMainState_types"

// Actions available
export type ObstacleActionType =
  | "obstacle@new"
  | ObstaclePositionActionType
  | ObstacleSizeActionType
  | ObstacleBorderActionType
  | ObstacleFillActionType
  | ObstacleShapeActionType
  | ObstacleAngleActionType
  | ObstacleRatioLockActionType

// Types of the obstacle element
export type ObstacleElementType = keyof ObstacleElementState

// Main state obstacle type
export interface ObstacleElementState {
  obstacle: ObstacleState[]
}

// Obstacle state type
export interface ObstacleState
  extends CollectionState,
    ObstaclePosition,
    ObstacleSize,
    ObstacleBorder,
    ObstacleFill,
    ObstacleShape,
    ObstacleAngle,
    ObstacleRatioLock {}

// Keys of the obstacle state
export type ObstacleKeys = keyof ObstacleState

// --------------------------------------------------------
// -------------------- Position --------------------------

export type ObstaclePositionActionType =
  | "obstacle@positionX"
  | "obstacle@positionY"

export interface ObstaclePosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ---------------------- Size ----------------------------

export type ObstacleSizeActionType = "obstacle@width" | "obstacle@height"

export interface ObstacleSize {
  width: number
  height: number
}

// --------------------------------------------------------
// --------------------- Border ---------------------------

export type ObstacleBorderActionType =
  | "obstacle@borderColor"
  | "obstacle@borderWidth"
  | "obstacle@borderOpacity"

export interface ObstacleBorder {
  borderColor: string
  borderWidth: number
  borderOpacity: number
}

// --------------------------------------------------------
// ----------------------- Fill ---------------------------

export type ObstacleFillActionType =
  | "obstacle@fillColor"
  | "obstacle@fillOpacity"

export interface ObstacleFill {
  fillColor: string
  fillOpacity: number
}

// --------------------------------------------------------
// ---------------------- Shape ---------------------------

export type ObstacleShapeActionType = "obstacle@shape"

export interface ObstacleShape {
  shape: "ellipse" | "rectangle"
}

// --------------------------------------------------------
// ---------------------- Angle ---------------------------

export type ObstacleAngleActionType = "obstacle@angle"

export interface ObstacleAngle {
  angle: number
}

// --------------------------------------------------------
// ------------------ Ratio lock --------------------------

export type ObstacleRatioLockActionType = "obstacle@ratioLock"

export interface ObstacleRatioLock {
  ratioLock: boolean
}

// --------------------------------------------------------
