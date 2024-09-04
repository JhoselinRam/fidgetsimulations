import {
  createSimpleNewCollectionSlice,
  createSimpleSlice
} from "../../useMainState"
import { sheetDefaultState } from "./defaultState"
import type { SheetKeys } from "./Sheet_types"

export const sheetNew = createSimpleNewCollectionSlice(
  "sheet",
  sheetDefaultState
)
export const sheetPositionX = createSimpleSlice<SheetKeys>("positionX", "sheet")
export const sheetPositionY = createSimpleSlice<SheetKeys>("positionY", "sheet")
export const sheetVelocityX = createSimpleSlice<SheetKeys>("velocityX", "sheet")
export const sheetVelocityY = createSimpleSlice<SheetKeys>("velocityY", "sheet")
export const sheetMass = createSimpleSlice<SheetKeys>("mass", "sheet")
export const sheetCharge = createSimpleSlice<SheetKeys>("charge", "sheet")
export const sheetColor = createSimpleSlice<SheetKeys>("color", "sheet")
export const sheetRadius = createSimpleSlice<SheetKeys>("radius", "sheet")
export const sheetWidth = createSimpleSlice<SheetKeys>("width", "sheet")
export const sheetHeight = createSimpleSlice<SheetKeys>("height", "sheet")
export const sheetColumns = createSimpleSlice<SheetKeys>("columns", "sheet")
export const sheetRows = createSimpleSlice<SheetKeys>("rows", "sheet")
export const sheetAngle = createSimpleSlice<SheetKeys>("angle", "sheet")
export const sheetRecursion = createSimpleSlice<SheetKeys>("recursion", "sheet")
