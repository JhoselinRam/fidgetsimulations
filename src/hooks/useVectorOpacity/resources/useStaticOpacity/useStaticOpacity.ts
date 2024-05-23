import useBindState from "../../../useBindState/useBindState"
import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorOpacityProps } from "../../useVectorOpacity_types"
import type { UseStaticOpacity } from "./useStaticOpacity_types"

function useStaticOpacity(
  item: CollectionOrder,
  vectorProps: VectorOpacityProps,
  opacityMode: VectorColorMode
): UseStaticOpacity {
  const opacityHooks = useBindState(item, vectorProps.opacity, "vector@opacity")
  const isDisabled = opacityMode === "dynamic"

  return {
    value: opacityHooks.value,
    onChange: opacityHooks.changeValue,
    isDisabled
  }
}

export default useStaticOpacity
