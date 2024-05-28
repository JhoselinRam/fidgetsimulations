import useBindState from "../../../useBindState/useBindState"
import type { VectorColorMode } from "../../../useMainState/resources/Vector/Vector_types"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { VectorOpacityProps } from "../../useVectorOpacity_types"
import type {
  OpacityMaxActionSelector,
  OpacityMaxRangeSelector,
  OpacityMinActionSelector,
  OpacityMinRangeSelector,
  OpacityRangeOption,
  UseOpacityRange
} from "./useOpacityRange_types"

const minPropSelector: OpacityMinRangeSelector = {
  value: "minOpacity",
  magnitude: "minOpacityMagnitude"
}

const maxPropSelector: OpacityMaxRangeSelector = {
  value: "maxOpacity",
  magnitude: "maxOpacityMagnitude"
}

const minActionSelector: OpacityMinActionSelector = {
  value: "vector@minOpacity",
  magnitude: "vector@minOpacityMagnitude"
}

const maxActionSelector: OpacityMaxActionSelector = {
  value: "vector@maxOpacity",
  magnitude: "vector@maxOpacityMagnitude"
}

function useOpacityRange(
  item: CollectionOrder,
  vectorProps: VectorOpacityProps,
  opacityMode: VectorColorMode,
  rangeOption: OpacityRangeOption
): UseOpacityRange {
  const isDisabled = opacityMode === "static"
  const minProp = minPropSelector[rangeOption]
  const minAction = minActionSelector[rangeOption]
  const maxProp = maxPropSelector[rangeOption]
  const maxAction = maxActionSelector[rangeOption]
  const magnitudeGap = 0.0001

  const minHooks = useBindState(item, vectorProps[minProp], minAction)
  const maxHooks = useBindState(item, vectorProps[maxProp], maxAction)

  function onChangeMinValue(value: number): void {
    const usedValue =
      rangeOption === "value"
        ? value
        : value < maxHooks.value
          ? value
          : maxHooks.value - magnitudeGap
    minHooks.changeValue(usedValue)
  }

  function onChangeMaxValue(value: number): void {
    const usedValue =
      rangeOption === "value"
        ? value
        : value > minHooks.value
          ? value
          : minHooks.value + magnitudeGap
    maxHooks.changeValue(usedValue)
  }

  return {
    minValueHooks: {
      value: minHooks.value,
      onChange: onChangeMinValue,
      isDisabled
    },
    maxValueHooks: {
      value: maxHooks.value,
      onChange: onChangeMaxValue,
      isDisabled
    }
  }
}

export default useOpacityRange
