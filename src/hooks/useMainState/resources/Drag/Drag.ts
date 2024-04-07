import { createSimpleNewCollectionSlice } from "../../useMainState"
import { dragDefaultState } from "./defaultState"

export const dragNew = createSimpleNewCollectionSlice("drag", dragDefaultState)
