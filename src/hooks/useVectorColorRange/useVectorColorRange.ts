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

  return {
    minMagnitudeHooks: {
      value: minValueHooks.value,
      onChange: minValueHooks.changeValue
    },
    maxMagnitudeHooks: {
      value: maxValueHooks.value,
      onChange: maxValueHooks.changeValue
    },
    isDisabled
  }
}

export default useVectorColorRange
