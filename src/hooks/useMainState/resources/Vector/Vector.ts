import { createSimpleSlice } from "../../useMainState"
import type { VectorStateKeys } from "./Vector_types"

export const vectorEnable = createSimpleSlice<VectorStateKeys>("enable", [
  "accelerationVector",
  "velocityVector"
])
export const vectorColorMode = createSimpleSlice<VectorStateKeys>("colorMode", [
  "accelerationVector",
  "velocityVector"
])
export const vectorOpacityMode = createSimpleSlice<VectorStateKeys>(
  "opacityMode",
  ["accelerationVector", "velocityVector"]
)
export const vectorGradientType = createSimpleSlice<VectorStateKeys>(
  "gradientType",
  ["accelerationVector", "velocityVector"]
)
export const vectorNormalize = createSimpleSlice<VectorStateKeys>("normalize", [
  "accelerationVector",
  "velocityVector"
])
export const vectorColor = createSimpleSlice<VectorStateKeys>("color", [
  "accelerationVector",
  "velocityVector"
])
export const vectorGradientStops = createSimpleSlice<VectorStateKeys>(
  "gradientStops",
  ["accelerationVector", "velocityVector"]
)
export const vectorGradientSpace = createSimpleSlice<VectorStateKeys>(
  "gradientSpace",
  ["accelerationVector", "velocityVector"]
)
export const vectorMinColorMagnitude = createSimpleSlice<VectorStateKeys>(
  "minColorMagnitude",
  ["accelerationVector", "velocityVector"]
)
export const vectorMaxColorMagnitude = createSimpleSlice<VectorStateKeys>(
  "maxColorMagnitude",
  ["accelerationVector", "velocityVector"]
)
export const vectorMaxSize = createSimpleSlice<VectorStateKeys>("maxSize", [
  "accelerationVector",
  "velocityVector"
])
export const vectorMaxSizeMagnitude = createSimpleSlice<VectorStateKeys>(
  "maxSizeMagnitude",
  ["accelerationVector", "velocityVector"]
)
export const vectorOpacity = createSimpleSlice<VectorStateKeys>("opacity", [
  "accelerationVector",
  "velocityVector"
])
export const vectorMaxOpacity = createSimpleSlice<VectorStateKeys>(
  "maxOpacity",
  ["accelerationVector", "velocityVector"]
)
export const vectorMinOpacity = createSimpleSlice<VectorStateKeys>(
  "minOpacity",
  ["accelerationVector", "velocityVector"]
)
export const vectorMaxOpacityMagnitude = createSimpleSlice<VectorStateKeys>(
  "maxOpacityMagnitude",
  ["accelerationVector", "velocityVector"]
)
export const vectorMinOpacityMagnitude = createSimpleSlice<VectorStateKeys>(
  "minOpacityMagnitude",
  ["accelerationVector", "velocityVector"]
)
