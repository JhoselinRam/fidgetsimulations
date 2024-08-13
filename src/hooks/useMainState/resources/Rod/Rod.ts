import {
  createSimpleNewCollectionSlice,
  createSimpleSlice
} from "../../useMainState"
import type { RodKeys } from "./Rod_types"
import { rodDefaultState } from "./defaultState"

export const rodNew = createSimpleNewCollectionSlice("rod", rodDefaultState)
export const rodRecursion = createSimpleSlice<RodKeys>("recursion", "rod")
