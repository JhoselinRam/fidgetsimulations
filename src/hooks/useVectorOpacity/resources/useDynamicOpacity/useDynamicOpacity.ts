import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorOpacityProps } from "../../useVectorOpacity_types"
import useOpacityRange from "../useOpacityRange/useOpacityRange"
import type { UseDynamicOpacity } from "./useDynamicOpacity_types"

function useDynamicOpacity(
  item: CollectionOrder,
  vectorProps: VectorOpacityProps,
  opacityMode: VectorColorMode
): UseDynamicOpacity {
  const valueHooks = useOpacityRange(item, vectorProps, opacityMode, "value")
  const magnitudeHooks = useOpacityRange(
    item,
    vectorProps,
    opacityMode,
    "magnitude"
  )

  return {
    valueHooks,
    magnitudeHooks
  }
}

export default useDynamicOpacity
