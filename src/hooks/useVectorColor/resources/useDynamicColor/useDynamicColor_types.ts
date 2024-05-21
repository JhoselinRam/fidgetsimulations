import type { UseColorGradient } from "../useColorGradient/useColorGradient_types"
import type { UseColorRange } from "../useColorRange/useColorRange_types"

export interface UseDynamicColor {
  colorRangeHooks: UseColorRange
  colorGradientHooks: UseColorGradient
}
