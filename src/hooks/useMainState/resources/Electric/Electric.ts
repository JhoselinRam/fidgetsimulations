import { createSimpleNewCollectionSlice } from "../../useMainState"
import { electricDefaultState } from "./defaultState"

export const electricNew = createSimpleNewCollectionSlice(
  "electric",
  electricDefaultState
)
