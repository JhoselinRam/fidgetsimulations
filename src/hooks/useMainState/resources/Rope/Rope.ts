import {
  createSimpleNewCollectionSlice,
  createSimpleSlice
} from "../../useMainState"
import type { RopeKeys } from "./Rope_types"
import { ropeDefaultState } from "./defaultState"

export const ropeNew = createSimpleNewCollectionSlice("rope", ropeDefaultState)
export const ropePositionX = createSimpleSlice<RopeKeys>("positionX", "rope")
export const ropePositionY = createSimpleSlice<RopeKeys>("positionY", "rope")
export const ropeLength = createSimpleSlice<RopeKeys>("length", "rope")
export const ropeAngle = createSimpleSlice<RopeKeys>("angle", "rope")
export const ropeNodes = createSimpleSlice<RopeKeys>("nodes", "rope")
export const ropeRod = createSimpleSlice<RopeKeys>("rod", "rope")
export const ropeBalls = createSimpleSlice<RopeKeys>("balls", "rope")
