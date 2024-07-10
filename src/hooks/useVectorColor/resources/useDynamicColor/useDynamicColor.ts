import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import useColorRange from "../useColorRange/useColorRange"
import useGradientColor from "../useGradientColor/useGradientColor"
import type { UseDynamicColor } from "./useDynamicColor_types"

function useDynamicColor(
  item: CollectionOrder,
  vectorProps: VectorColorProps,
  colorMode: VectorColorMode
): UseDynamicColor {
  const colorRangeHooks = useColorRange(item, vectorProps, colorMode)
  const gradientHooks = useGradientColor(item, vectorProps, colorMode)

  return {
    colorRangeHooks,
    gradientHooks
  }
}

export default useDynamicColor
