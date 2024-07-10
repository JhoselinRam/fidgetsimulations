import type {
  VectorColor,
  VectorColorMode,
  VectorMode
} from "../useMainState/resources/Vector/Vector_types"
import type { SimpleState } from "../useMainState/useMainState_types"
import type { UseDynamicColor } from "./resources/useDynamicColor/useDynamicColor_types"

export interface UseVectorColor {
  colorModeHooks: VectorColorModeHooks
  colorHooks: SimpleVectorState<string>
  dynamicHooks: UseDynamicColor
}

export interface VectorColorModeHooks {
  value: VectorColorMode
  onChange: (value: string) => void
}

export interface SimpleVectorState<T> extends SimpleState<T> {
  isDisabled: boolean
}

export interface VectorColorProps
  extends VectorColor,
    Pick<VectorMode, "colorMode" | "gradientType"> {}
