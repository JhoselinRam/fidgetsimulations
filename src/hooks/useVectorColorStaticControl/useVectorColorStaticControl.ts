import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type { UseVectorColorStaticControl } from "./useVectorColorStaticControl_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useBindState from "../useBindState/useBindState"

function useVectorColorStaticControl(
  type: BallVectorType
): UseVectorColorStaticControl {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const vectorColor = mainState[id].color

  const colorHooks = useBindState(item, vectorColor, "vector@color")

  return {
    value: colorHooks.value,
    onChange: colorHooks.changeValue
  }
}

export default useVectorColorStaticControl
