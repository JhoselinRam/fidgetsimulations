import useBindState from "../../../useBindState/useBindState"
import type {
  VectorColorMode,
  VectorGradientType
} from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import type { UseCustomGradient } from "./useCustomGradient_types"

function useCustomGradient(
  item: CollectionOrder,
  vectorProps: VectorColorProps,
  colorMode: VectorColorMode,
  gradientType: VectorGradientType
): UseCustomGradient {
  const space = useBindState(
    item,
    vectorProps.gradientSpace,
    "vector@gradientSpace"
  )
  const stops = useBindState(
    item,
    vectorProps.gradientStops,
    "vector@gradientStops"
  )

  return {
    spaceHooks: {
      value: space.value,
      onChange: space.changeValue
    },
    stopsHooks: {
      value: stops.value,
      onChange: stops.changeValue
    },
    isDisabled: colorMode === "static",
    gradientType
  }
}

export default useCustomGradient
