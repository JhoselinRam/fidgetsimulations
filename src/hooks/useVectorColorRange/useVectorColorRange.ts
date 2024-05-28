import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type { UseVectorColorRange } from "./useVectorColorRange_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useBindState from "../useBindState/useBindState"

function useVectorColorRange(type: BallVectorType): UseVectorColorRange {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const minMagnitude = mainState[id].minColorMagnitude
  const maxMagnitude = mainState[id].maxColorMagnitude
  const isDisabled = mainState[id].colorMode === "static"
  const magnitudeGap = 0.0001

  const minValueHooks = useBindState(
    item,
    minMagnitude,
    "vector@minColorMagnitude"
  )
  const maxValueHooks = useBindState(
    item,
    maxMagnitude,
    "vector@maxColorMagnitude"
  )

  function onChangeMinValue(value: number): void {
    const usedValue =
      value < maxValueHooks.value ? value : maxValueHooks.value - magnitudeGap
    minValueHooks.changeValue(usedValue)
  }

  function onChangeMaxValue(value: number): void {
    const usedValue =
      value > minValueHooks.value ? value : minValueHooks.value + magnitudeGap
    maxValueHooks.changeValue(usedValue)
  }

  return {
    minMagnitudeHooks: {
      value: minValueHooks.value,
      onChange: onChangeMinValue
    },
    maxMagnitudeHooks: {
      value: maxValueHooks.value,
      onChange: onChangeMaxValue
    },
    isDisabled
  }
}

export default useVectorColorRange
