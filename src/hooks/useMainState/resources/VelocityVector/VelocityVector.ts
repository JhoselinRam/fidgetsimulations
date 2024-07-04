import { createSimpleNewCollectionSlice } from "../../useMainState"
import { vectorDefaultState } from "../Vector/defaultState"

export const VelocityVectorNew = createSimpleNewCollectionSlice(
  "velocityVector",
  vectorDefaultState
)
