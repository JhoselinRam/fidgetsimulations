import type { Key } from "react-aria-components"
import type { VectorGradientType } from "../useMainState/resources/Vector/Vector_types"

export interface UseVectorColorGradient {
  selectItems: VectorGradientItem[]
  selectGradientHooks: {
    selectedKey: VectorGradientType
    onSelectionChange: (value: Key) => void
  }
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
