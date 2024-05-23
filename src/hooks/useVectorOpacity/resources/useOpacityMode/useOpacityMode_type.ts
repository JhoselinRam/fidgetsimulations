import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"

export interface UseOpacityMode {
  value: VectorColorMode
  onChange: (value: string) => void
}
