import type { CollectionState } from "../../useMainState_types"

// Actions available
export type ContainerActionType =
  | "container@new"
  | ContainerPositionActionType
  | ContainerSizeActionType
  | ContainerBorderActionType
  | ContainerFillActionType
  | ContainerShapeActionType
  | ContainerAngleActionType

// Types of the container element
export type ContainerElementType = keyof ContainerElementState

// Main state container type
export interface ContainerElementState {
  container: ContainerState[]
}

// Container state type
export interface ContainerState
  extends CollectionState,
    ContainerPosition,
    ContainerSize,
    ContainerBorder,
    ContainerFill,
    ContainerShape,
    ContainerAngle {}

// Keys of the container state
export type ContainerKeys = keyof ContainerState

// --------------------------------------------------------
// -------------------- Position --------------------------

export type ContainerPositionActionType =
  | "container@positionX"
  | "container@positionY"

export interface ContainerPosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ---------------------- Size ----------------------------

export type ContainerSizeActionType = "container@width" | "container@height"

export interface ContainerSize {
  width: number
  height: number
}

// --------------------------------------------------------
// --------------------- Border ---------------------------

export type ContainerBorderActionType =
  | "container@borderColor"
  | "container@borderWidth"
  | "container@borderOpacity"

export interface ContainerBorder {
  borderColor: string
  borderWidth: number
  borderOpacity: number
}

// --------------------------------------------------------
// ----------------------- Fill ---------------------------

export type ContainerFillActionType =
  | "container@fillColor"
  | "container@fillOpacity"

export interface ContainerFill {
  fillColor: string
  fillOpacity: number
}

// --------------------------------------------------------
// ---------------------- Shape ---------------------------

export type ContainerShapeActionType = "container@shape"

export interface ContainerShape {
  shape: "oval" | "rectangle"
}

// --------------------------------------------------------
// ---------------------- Angle ---------------------------

export type ContainerAngleActionType = "container@angle"

export interface ContainerAngle {
  angle: number
}

// --------------------------------------------------------
