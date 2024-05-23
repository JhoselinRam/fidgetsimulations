import useBindState from "../../../useBindState/useBindState"
import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorOpacityProps } from "../../useVectorOpacity_types"
import type { UseOpacityMode } from "./useOpacityMode_type"

function useOpacityMode(
  item: CollectionOrder,
  vectorProps: VectorOpacityProps
): UseOpacityMode {
  const modeHooks = useBindState(
    item,
    vectorProps.opacityMode,
    "vector@opacityMode"
  )

  function onChange(value: string): void {
    modeHooks.changeValue(value as VectorColorMode)
  }

  return {
    value: modeHooks.value,
    onChange
  }
}

export default useOpacityMode
