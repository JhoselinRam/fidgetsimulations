import type { VectorColorMode } from "../useMainState/resources/Vector/Vector_types"

export interface UseVectorColor {
  value: VectorColorMode
  onChange: (value: string) => void
}
