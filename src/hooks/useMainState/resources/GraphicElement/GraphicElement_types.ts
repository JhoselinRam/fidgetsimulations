import type { CollectionState } from "../../useMainState_types"
import type { DataOutputState } from "../DataOutput/DataOutput_types"
import type { LinechartState } from "../Linechart/LineChart_types"
import type { SimulationWindowState } from "../SimulationWindow/SimulationWindow_types"

// Actions available
export type GraphicActionType =
  | PositionActionType
  | SizeActionType
  | SizeEditActionType
  | DomainActionType
  | AspectRatioActionType
  | AxisColorActionType
  | GridActionType

// Graphic state type
export interface GraphicState
  extends GraphicElementPosition,
    GraphicElementSize,
    CollectionState,
    SizeEdit {}

// Types of graphic elements
export type GraphicElementType = keyof GraphicalElementsState

// Keys of the graphic state type
export type GraphicKeys = keyof (GraphicState &
  AxisDomain &
  AspectRatioEdit &
  AxisColor &
  Grid)

export type GraphicalCollection =
  | SimulationWindowState
  | LinechartState
  | DataOutputState

export interface GraphicalElementsState {
  simulationWindow: readonly [SimulationWindowState]
  linechart: LinechartState[]
  dataoutput: DataOutputState[]
}

export type GraphicSelector = {
  [k in GraphicElementType]: (id: string) => JSX.Element
}

// --------------------- Position -------------------------

type PositionActionType = "graphic@positionX" | "graphic@positionY"

export interface GraphicElementPosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ----------------------- Size ---------------------------

type SizeActionType = "graphic@width" | "graphic@height"

export interface GraphicElementSize {
  width: number
  height: number
}

// --------------------------------------------------------
// -------------------- Axis Domain -----------------------

export type DomainActionType =
  | "graphic@startX"
  | "graphic@startY"
  | "graphic@endX"
  | "graphic@endY"

export interface AxisDomain {
  startX: number
  endX: number
  startY: number
  endY: number
}

// --------------------------------------------------------
// ---------------- Manual axis editing -------------------

type SizeEditActionType = "graphic@manualEdit" | "graphic@lockRatio"

export interface SizeEdit {
  manualEdit: boolean
  lockRatio: boolean
}

// --------------------------------------------------------
// ----------------- Aspect ratio -------------------------

type AspectRatioActionType = "graphic@aspectRatio"

export interface AspectRatioEdit {
  setAspectRatio: boolean
}

// --------------------------------------------------------
// --------------------- Color ----------------------------

export type AxisColorActionType =
  | "graphic@background"
  | "graphic@colorX"
  | "graphic@opacityX"
  | "graphic@colorY"
  | "graphic@opacityY"

export interface AxisColor {
  background: string
  colorX: string
  opacityX: number
  colorY: string
  opacityY: number
}

// --------------------------------------------------------
// ---------------------- Grid ----------------------------

export type GridActionType =
  | "graphic@gridPrimaryEnable"
  | "graphic@gridPrimaryColor"
  | "graphic@gridSecondaryEnable"
  | "graphic@gridSecondaryColor"

export interface Grid {
  gridPrimaryEnable: boolean
  gridPrimaryColor: string
  gridSecondaryEnable: boolean
  gridSecondaryColor: string
}

// --------------------------------------------------------
// --------------------------------------------------------
