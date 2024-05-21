import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import type { UseColorRange } from "./useColorRange_types"

function useColorRange(
  colorProps: VectorColorProps,
  item: CollectionOrder
): UseColorRange {
  const minMagnitude = useBindState(
    item,
    colorProps.minColorMagnitude,
    "vector@minColorMagnitude"
  )
  const maxMagnitude = useBindState(
    item,
    colorProps.maxColorMagnitude,
    "vector@maxColorMagnitude"
  )

  return {
    minHooks: {
      value: minMagnitude.value,
      onChange: minMagnitude.changeValue
    },
    maxHooks: {
      value: maxMagnitude.value,
      onChange: maxMagnitude.changeValue
    }
  }
}

export default useColorRange
