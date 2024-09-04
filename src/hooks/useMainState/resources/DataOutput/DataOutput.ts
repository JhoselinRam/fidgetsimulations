import { createSimpleNewCollectionSlice } from "../../useMainState"
import { dataOutputDefaultState } from "./defaultState"

export const dataOutputNew = createSimpleNewCollectionSlice(
  "dataoutput",
  dataOutputDefaultState
)
