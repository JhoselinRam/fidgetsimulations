import type {
  GraphicElementPosition,
  GraphicElementSize,
  SizeEdit
} from "../GraphicElement/GraphicElement_types"
import type {
  DataOutputBalls,
  DataOutputColumn,
  DataOutputEnable,
  DataOutputState
} from "./DataOutput_types"

export const dataOutputPositionDefaultState: GraphicElementPosition = {
  positionX: 0,
  positionY: 0
}

export const dataOutputSizeDefaultState: GraphicElementSize = {
  height: 300,
  width: 300
}

export const dataOutputSizeEditDefaultState: SizeEdit = {
  lockRatio: false,
  manualEdit: false
}

export const dataOutputEnableDefaultState: DataOutputEnable = {
  enable: true
}

export const dataOutputBallsDefaultState: DataOutputBalls = {
  balls: []
}

export const xPositionColumnDefaultState: DataOutputColumn = {
  name: "Position X",
  abbreviation: "x",
  unit: "m",
  id: "positionX",
  expression: "",
  data: []
}

export const yPositionColumnDefaultState: DataOutputColumn = {
  name: "Position Y",
  abbreviation: "y",
  unit: "m",
  id: "positionY",
  expression: "",
  data: []
}

export const xVelocityColumnDefaultState: DataOutputColumn = {
  name: "Velocity X",
  abbreviation: "Vx",
  unit: "m/s",
  id: "velocityX",
  expression: "",
  data: []
}

export const yVelocityColumnDefaultState: DataOutputColumn = {
  name: "Velocity Y",
  abbreviation: "Vy",
  unit: "m/s",
  id: "velocityY",
  expression: "",
  data: []
}

export const xAccelColumnDefaultState: DataOutputColumn = {
  name: "Acceleration X",
  abbreviation: "Ax",
  unit: "m/s^2",
  id: "accelX",
  expression: "",
  data: []
}

export const yAccelColumnDefaultState: DataOutputColumn = {
  name: "Acceleration Y",
  abbreviation: "Ay",
  unit: "m/s^2",
  id: "accelY",
  expression: "",
  data: []
}

export const dataOutputColumnsDefaultState: DataOutputColumn[] = [
  xPositionColumnDefaultState,
  yPositionColumnDefaultState,
  xVelocityColumnDefaultState,
  yVelocityColumnDefaultState,
  xAccelColumnDefaultState,
  yAccelColumnDefaultState
]

export const dataOutputDefaultState: DataOutputState = {
  ...dataOutputPositionDefaultState,
  ...dataOutputSizeDefaultState,
  ...dataOutputSizeEditDefaultState,
  ...dataOutputEnableDefaultState,
  ...dataOutputBallsDefaultState,
  id: "",
  type: "dataoutput",
  name: "",
  columns: dataOutputColumnsDefaultState
}

export function createDataOutputState(): DataOutputState {
  const newState = { ...dataOutputDefaultState }

  newState.id = crypto.randomUUID()
  newState.positionX = Math.random() * 500
  newState.positionY = Math.random() * 500

  newState.balls = []
  newState.columns.forEach((column) => {
    column.data = []
  })

  return newState
}
