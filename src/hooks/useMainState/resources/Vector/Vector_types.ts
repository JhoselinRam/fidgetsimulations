import type { Color_Map_types } from "scigrapher/lib/es5/tools/Color_Map/Predefined/Color_Map_Types"
import type { GradientInputKnob } from "../../../useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../../../useGradientInput/resources/useGradientStep/useGradientStep_types"

export type VectorActionType =
  | VectorModeActionType
  | VectorColorActionType
  | VectorSizeActionType
  | VectorOpacityActionType

export interface VectorState
  extends VectorMode,
    VectorColor,
    VectorSize,
    VectorOpacity {}

export type VectorStateKeys = keyof VectorState

export type VectorColorMode = "static" | "dynamic"
export type VectorGradientType = Color_Map_types | "custom"

// --------------------------------------------------------
// ---------------------- Mode ----------------------------

export type VectorModeActionType =
  | "vector@enable"
  | "vector@colorMode"
  | "vector@opacityMode"
  | "vector@gradientType"
  | "vector@normalize"

export interface VectorMode {
  enable: boolean
  colorMode: VectorColorMode
  opacityMode: VectorColorMode
  gradientType: VectorGradientType
  normalize: boolean
}

// --------------------------------------------------------
// ---------------------- Color ---------------------------

export type VectorColorActionType =
  | "vector@color"
  | "vector@gradientStops"
  | "vector@gradientSpace"
  | "vector@minColorMagnitude"
  | "vector@maxColorMagnitude"

export interface VectorColor {
  color: string
  gradientStops: GradientInputKnob[]
  gradientSpace: GradientColorSpace
  minColorMagnitude: number
  maxColorMagnitude: number
}

// --------------------------------------------------------
// ----------------------- Size ---------------------------

export type VectorSizeActionType = "vector@maxSize" | "vector@maxSizeMagnitude"

export interface VectorSize {
  maxSize: number
  maxSizeMagnitude: number
}

// --------------------------------------------------------
// --------------------- Opacity --------------------------

export type VectorOpacityActionType =
  | "vector@opacity"
  | "vector@minOpacity"
  | "vector@maxOpacity"
  | "vector@minOpacityMagnitude"
  | "vector@maxOpacityMagnitude"

export interface VectorOpacity {
  opacity: number
  minOpacity: number
  maxOpacity: number
  minOpacityMagnitude: number
  maxOpacityMagnitude: number
}

// --------------------------------------------------------

export type ValidPayloadType<T extends VectorStateKeys> = {
  [k in T]: VectorState[k]
} & {
  id: "velocityVector" | "accelerationVector"
}
