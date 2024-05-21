import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import type { UseColorGradient } from "./useColorGradient_types"

function useColorGradient(
  colorProps: VectorColorProps,
  item: CollectionOrder
): UseColorGradient {
  const gradientType = useBindState(
    item,
    colorProps.gradientType,
    "vector@gradientType"
  )
  const gradientSpace = useBindState(
    item,
    colorProps.gradientSpace,
    "vector@gradientSpace"
  )
  const gradientStops = useBindState(
    item,
    colorProps.gradientStops,
    "vector@gradientStops"
  )

  return {
    gradientTypeHooks: {
      value: gradientType.value,
      onChange: gradientType.changeValue
    },
    gradientStopsHooks: {
      value: gradientStops.value,
      onChange: gradientStops.changeValue
    },
    spaceHooks: {
      value: gradientSpace.value,
      onChange: gradientSpace.changeValue
    }
  }
}

export default useColorGradient
