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
export const ropeVelocityX = createSimpleSlice<RopeKeys>("velocityX", "rope")
export const ropeVelocityY = createSimpleSlice<RopeKeys>("velocityY", "rope")
export const ropeMass = createSimpleSlice<RopeKeys>("mass", "rope")
export const ropeRadius = createSimpleSlice<RopeKeys>("radius", "rope")
export const ropeCharge = createSimpleSlice<RopeKeys>("charge", "rope")
export const ropeColor = createSimpleSlice<RopeKeys>("color", "rope")
