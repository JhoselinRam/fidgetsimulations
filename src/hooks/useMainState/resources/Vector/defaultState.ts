import type {
  VectorColor,
  VectorMode,
  VectorOpacity,
  VectorSize,
  VectorState
} from "./Vector_types"

export const vectorModeDefaultState: VectorMode = {
  enable: false,
  colorMode: "static",
  opacityMode: "static",
  gradientType: "magnet",
  normalize: true
}

export const vectorColorDefaultState: VectorColor = {
  color: "#303030",
  gradientStops: [],
  gradientSpace: "rgb",
  minColorMagnitude: 0,
  maxColorMagnitude: 10
}

export const vectorSizeDefaultState: VectorSize = {
  maxSize: 20,
  maxSizeMagnitude: 10
}

export const vectorOpacityDefaultState: VectorOpacity = {
  opacity: 1,
  maxOpacity: 1,
  minOpacity: 0,
  minOpacityMagnitude: 0,
  maxOpacityMagnitude: 10
}

export const vectorDefaultState: VectorState = {
  ...vectorModeDefaultState,
  ...vectorColorDefaultState,
  ...vectorSizeDefaultState,
  ...vectorOpacityDefaultState
}
