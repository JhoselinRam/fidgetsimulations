import type { GradientInputKnob } from "../useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../useGradientInput/resources/useGradientStep/useGradientStep_types"
import type {
  VectorColor,
  VectorColorMode,
  VectorGradientType,
  VectorMode
} from "../useMainState/resources/Vector/Vector_types"
import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseVectorColor {
  colorModeHooks: SimpleState<VectorColorMode>
  staticColorHooks: SimpleState<string>
  dynamicColorHooks: DynamicColorHooks
}

export interface DynamicColorHooks {
  colorRangeHooks: ColorRangeHooks
  colorGradientHooks: ColorGradientHooks
}

export interface ColorRangeHooks {
  minHooks: SimpleState<number>
  maxHooks: SimpleState<number>
}

export interface ColorGradientHooks {
  gradientTypeHooks: SimpleState<VectorGradientType>
  spaceHooks: SimpleState<GradientColorSpace>
  gradientStopsHooks: SimpleState<GradientInputKnob[]>
}

export interface VectorColorProps
  extends VectorColor,
    Pick<VectorMode, "colorMode" | "gradientType"> {}
