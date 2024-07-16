import { createSimpleNewCollectionSlice } from "../../useMainState"
import { rodDefaultState } from "./defaultState"

export const rodNew = createSimpleNewCollectionSlice("rod", rodDefaultState)
