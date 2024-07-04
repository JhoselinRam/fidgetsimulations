import type {
  VectorColor,
  VectorMode,
  VectorOpacity,
  VectorSize,
  VectorState
} from "./Vector_types"

export const vectorModeDefaultState: VectorMode = {
  enable: true,
  colorMode: "static",
  opacityMode: "static",
  gradientType: "magnet",
  normalize: true
}

export const vectorColorDefaultState: VectorColor = {
  color: "#ffffff",
  gradientStops: [
    { position: 0, color: "#0000ff" },
    { position: 1, color: "#ff0000" }
  ],
  gradientSpace: "rgb",
  minColorMagnitude: 0,
  maxColorMagnitude: 10
}

export const vectorSizeDefaultState: VectorSize = {
  maxSize: 40,
  maxSizeMagnitude: 5
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
  ...vectorOpacityDefaultState,
  name: "",
  id: "",
  type: "velocityVector"
}
