import {
  createSimpleNewCollectionSlice,
  createSimpleSlice
} from "../../useMainState"
import { springDefaultState } from "./defaultState"

export const springNew = createSimpleNewCollectionSlice(
  "spring",
  springDefaultState
)
export const springStrength = createSimpleSlice("strength", "spring")
