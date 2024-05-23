import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type { UseVectorStaticControl } from "./useVectorStaticControl_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useBindState from "../useBindState/useBindState"

function useVectorStaticControl(type: BallVectorType): UseVectorStaticControl {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const vectorColor = mainState[id].color
  const isDisabled = mainState[id].colorMode === "dynamic"

  const colorHooks = useBindState(item, vectorColor, "vector@color")

  return {
    colorHooks: {
      value: colorHooks.value,
      onChange: colorHooks.changeValue
    },
    isDisabled
  }
}

export default useVectorStaticControl
