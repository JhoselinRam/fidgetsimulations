import type { UseColorRange } from "../useColorRange/useColorRange_types"
import type { UseGradientColor } from "../useGradientColor/useGradientColor_types"

export interface UseDynamicColor {
  colorRangeHooks: UseColorRange
  gradientHooks: UseGradientColor
}
