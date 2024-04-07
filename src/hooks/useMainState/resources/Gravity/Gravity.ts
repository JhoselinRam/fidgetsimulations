import { createSimpleNewCollectionSlice } from "../../useMainState"
import { gravityDefaultState } from "./defaultState"

export const gravityNew = createSimpleNewCollectionSlice(
  "gravity",
  gravityDefaultState
)
