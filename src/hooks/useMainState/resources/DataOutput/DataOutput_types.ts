import type {
  BallAccel,
  BallPosition,
  BallVelocity
} from "../Balls/Balls_types"
import type { GraphicState } from "../GraphicElement/GraphicElement_types"

export type DataOutputActionType = "dataoutput@new"

export interface DataOutputState
  extends GraphicState,
    DataOutputEnable,
    DataOutputBalls {
  columns: DataOutputColumn[]
}

export type DataOutputKeys = keyof DataOutputState

export interface DataOutputColumn
  extends DataOutputColumnName,
    DataOutputColumnExpression,
    DataOutputColumnData {
  id: string
}

// --------------------------------------------------------

export type DataOutputBasicDataProperties =
  | keyof BallVelocity
  | keyof BallAccel
  | keyof Pick<BallPosition, "positionX" | "positionY">

// --------------------------------------------------------
// ---------------------- Enable --------------------------

export type DataOutputEnableActionType = "dataoutput@enable"

export interface DataOutputEnable {
  enable: boolean
}

// --------------------------------------------------------
// ---------------------- Balls ---------------------------

export type DataOutputBallsActionType = "dataoutput@balls"

export interface DataOutputBalls {
  balls: string[]
}

// --------------------------------------------------------
// ------------------- Column Name ------------------------

export type DataOutputColumnNameActionType =
  | "dataoutput@name"
  | "dataoutput@abbreviation"
  | "dataoutput@unit"

export interface DataOutputColumnName {
  name: string
  abbreviation: string
  unit: string
}

// --------------------------------------------------------
// ----------------- Column Expression --------------------

export type DataOutputColumnExpressionActionType = "dataoutput@expression"

export interface DataOutputColumnExpression {
  expression: string
}

// --------------------------------------------------------
// --------------------------------------------------------

export type DataOutputColumnDataActionType = "dataoutput@data"

export interface DataOutputColumnData {
  data: number[]
}

// --------------------------------------------------------
