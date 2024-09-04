import { ballColorDefaultState } from "../Balls/defaultState"
import type {
  SheetBallProperties,
  SheetPosition,
  SheetRecursion,
  SheetShape,
  SheetState,
  SheetVelocity
} from "./Sheet_types"

const sheetPositionDefaultState: SheetPosition = {
  positionX: -4,
  positionY: 4
}

const sheetVelocityDefaultState: SheetVelocity = {
  velocityX: 0,
  velocityY: 0
}

const sheetBallPropertiesDefaultState: SheetBallProperties = {
  charge: 0,
  color: ballColorDefaultState.color,
  mass: 1,
  radius: 0.08
}

const sheetShapeDefaultState: SheetShape = {
  angle: 0,
  columns: 25,
  height: 8,
  rows: 25,
  width: 8
}

const sheetRecursionDefaultState: SheetRecursion = {
  recursion: 1
}

export const sheetDefaultState: SheetState = {
  ...sheetPositionDefaultState,
  ...sheetVelocityDefaultState,
  ...sheetBallPropertiesDefaultState,
  ...sheetShapeDefaultState,
  ...sheetRecursionDefaultState,
  id: "",
  type: "sheet",
  name: ""
}

export function createSheetState(): SheetState {
  const newState = { ...sheetDefaultState }
  newState.id = crypto.randomUUID()

  return newState
}
