import type { Key } from "react-aria-components"
import type { VectorGradientType } from "../../../useMainState/resources/Vector/Vector_types"
import type { UseCustomGradient } from "../useCustomGradient/useCustomGradient_types"

export interface UseGradientColor {
  selectItems: VectorGradientItem[]
  selectGradientHooks: VectorGradientSelectHooks
  customGradientHooks: UseCustomGradient
}

export interface VectorGradientSelectHooks {
  selectedKey: VectorGradientType
  onSelectionChange: (value: Key) => void
  isDisabled: boolean
}

export interface VectorGradientItem {
  id: string
  name: string
}

export const gradientTypeList: VectorGradientType[] = [
  "viridis",
  "plasma",
  "magma",
  "magnet",
  "swamp",
  "fairy",
  "inv_magnet",
  "inv_swamp",
  "inv_fairy",
  "fire",
  "royal",
  "hsv",
  "custom"
]
