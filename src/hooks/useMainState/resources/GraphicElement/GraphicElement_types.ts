import type { CollectionState } from "../../useMainState_types"
import type { DataOutputState } from "../DataOutput/DataOutput_types"
import type { LinechartState } from "../Linechart/LineChart_types"
import type { SimulationWindowState } from "../SimulationWindow/SimulationWindow_types"

// Actions available
export type GraphicActionType =
  | PositionActionType
  | SizeActionType
  | SizeEditActionType

// Graphic state type
export interface GraphicState
  extends GraphicElementPosition,
    GraphicElementSize,
    CollectionState,
    SizeEdit {}

// Types of graphic elements
export type GraphicElementType = keyof GraphicalElementsState

// Keys of the graphic state type
export type GraphicKeys = keyof GraphicState

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

interface GraphicElementPosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ----------------------- Size ---------------------------

type SizeActionType = "graphic@width" | "graphic@height"

interface GraphicElementSize {
  width: number
  height: number
}

// --------------------------------------------------------
// -------------------- Axis Domain -----------------------

export interface AxisDomain {
  startX: number
  endX: number
  startY: number
  endY: number
}

// --------------------------------------------------------
// --------------------------------------------------------

type SizeEditActionType = "graphic@manualEdit" | "graphic@lockRatio"

export interface SizeEdit {
  manualEdit: boolean
  lockRatio: boolean
}

// --------------------------------------------------------
