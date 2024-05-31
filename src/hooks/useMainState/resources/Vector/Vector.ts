import { generateStaticSlice } from "../../useMainState"
import { vectorDefaultState } from "./defaultState"

export const vectorEnable = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "enable"
)
export const vectorColorMode = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "colorMode"
)
export const vectorOpacityMode = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "opacityMode"
)
export const vectorGradientType = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "gradientType"
)
export const vectorNormalize = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "normalize"
)
export const vectorColor = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "color"
)
export const vectorGradientStops = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "gradientStops"
)
export const vectorGradientSpace = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "gradientSpace"
)
export const vectorMinColorMagnitude = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "minColorMagnitude"
)
export const vectorMaxColorMagnitude = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "maxColorMagnitude"
)
export const vectorMaxSize = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "maxSize"
)
export const vectorMaxSizeMagnitude = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "maxSizeMagnitude"
)
export const vectorOpacity = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "opacity"
)
export const vectorMaxOpacity = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "maxOpacity"
)
export const vectorMinOpacity = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "minOpacity"
)
export const vectorMaxOpacityMagnitude = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "maxOpacityMagnitude"
)
export const vectorMinOpacityMagnitude = generateStaticSlice(
  ["velocityVector", "accelerationVector"],
  vectorDefaultState,
  "minOpacityMagnitude"
)
