import useBindState from "../../../useBindState/useBindState"
import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorColorProps } from "../../useVectorColor_types"
import type { UseColorRange } from "./useColorRange_types"

function useColorRange(
  item: CollectionOrder,
  vectorProps: VectorColorProps,
  colorMode: VectorColorMode
): UseColorRange {
  const minMagnitude = useBindState(
    item,
    vectorProps.minColorMagnitude,
    "vector@minColorMagnitude"
  )
  const maxMagnitude = useBindState(
    item,
    vectorProps.maxColorMagnitude,
    "vector@maxColorMagnitude"
  )
  const magnitudeGap = 0.0001
  const isDisabled = colorMode === "static"

  function onChangeMinValue(value: number): void {
    const usedValue =
      value < maxMagnitude.value ? value : maxMagnitude.value - magnitudeGap
    minMagnitude.changeValue(usedValue)
  }

  function onChangeMaxValue(value: number): void {
    const usedValue =
      value > minMagnitude.value ? value : minMagnitude.value + magnitudeGap
    maxMagnitude.changeValue(usedValue)
  }

  return {
    minMagnitudeHooks: {
      value: minMagnitude.value,
      onChange: onChangeMinValue,
      isDisabled
    },
    maxMagnitudeHooks: {
      value: maxMagnitude.value,
      onChange: onChangeMaxValue,
      isDisabled
    }
  }
}

export default useColorRange
