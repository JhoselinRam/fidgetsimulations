import { createSimpleNewCollectionSlice } from "../../useMainState"
import { dampingDefaultState } from "./defaultState"

export const dampingNew = createSimpleNewCollectionSlice(
  "damping",
  dampingDefaultState
)
