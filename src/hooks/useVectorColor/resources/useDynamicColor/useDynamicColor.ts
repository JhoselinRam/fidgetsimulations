import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import useColorGradient from "../useColorGradient/useColorGradient"
import useColorRange from "../useColorRange/useColorRange"
import type { UseDynamicColor } from "./useDynamicColor_types"

function useDynamicColor(
  colorProps: VectorColorProps,
  item: CollectionOrder
): UseDynamicColor {
  const colorRangeHooks = useColorRange(colorProps, item)
  const colorGradientHooks = useColorGradient(colorProps, item)

  return {
    colorGradientHooks,
    colorRangeHooks
  }
}

export default useDynamicColor
