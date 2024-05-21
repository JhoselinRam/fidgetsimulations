import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type { UseVectorCustomGradient } from "./useVectorCustomGradient_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useBindState from "../useBindState/useBindState"

function useVectorCustomGradient(
  type: BallVectorType
): UseVectorCustomGradient {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const gradientType = mainState[id].gradientType
  const gradientStops = mainState[id].gradientStops
  const gradientSpace = mainState[id].gradientSpace

  const vectorGradientStops = useBindState(
    item,
    gradientStops,
    "vector@gradientStops"
  )
  const vectorGradientSpace = useBindState(
    item,
    gradientSpace,
    "vector@gradientSpace"
  )

  return {
    gradientType,
    gradientStopsHooks: {
      value: vectorGradientStops.value,
      onChange: vectorGradientStops.changeValue
    },
    gradientSpace: {
      outerSpace: vectorGradientSpace.value,
      onOuterSpaceChange: vectorGradientSpace.changeValue
    }
  }
}

export default useVectorCustomGradient
