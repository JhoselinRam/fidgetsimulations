import {
  createSimpleNewCollectionSlice,
  createSimpleSlice
} from "../../useMainState"
import type { DragKeys } from "./Drag_types"
import { dragDefaultState } from "./defaultState"

export const dragNew = createSimpleNewCollectionSlice("drag", dragDefaultState)
export const dragDensity = createSimpleSlice<DragKeys>("density", "drag")
