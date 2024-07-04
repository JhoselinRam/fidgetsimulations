import { createSimpleNewCollectionSlice } from "../../useMainState"
import { vectorDefaultState } from "../Vector/defaultState"

export const accelerationVectorNew = createSimpleNewCollectionSlice(
  "accelerationVector",
  vectorDefaultState
)
