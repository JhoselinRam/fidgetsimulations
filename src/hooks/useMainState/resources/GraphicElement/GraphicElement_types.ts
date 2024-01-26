import type { SimulationWindowState } from "../SimulationWindow/SimulationWindow_types"

// Actions available
export type GraphicActionType = PositionActionType | SizeActionType

// Graphic state type
export interface GraphicState
  extends GraphicElementPosition,
    GraphicElementSize {
  id: string
  type: GraphicElementType
}

// Types of graphic elements
export type GraphicElementType = keyof GraphicalElementsState

// Keys of the graphic state type
export type GraphicKeys = keyof GraphicState

export interface GraphicalElementsState {
  simulationWindow: readonly [SimulationWindowState]
}

export interface GraphOrder {
  type: GraphicElementType
  id: string
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
// --------------------------------------------------------
