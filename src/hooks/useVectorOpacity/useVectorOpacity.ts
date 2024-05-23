import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  UseVectorOpacity,
  VectorOpacityProps
} from "./useVectorOpacity_types"
import { mainStateContext } from "../useMainState/useMainState"
import useOpacityMode from "./resources/useOpacityMode/useOpacityMode"
import useStaticOpacity from "./resources/useStaticOpacity/useStaticOpacity"
import useDynamicOpacity from "./resources/useDynamicOpacity/useDynamicOpacity"

function useVectorOpacity(type: BallVectorType): UseVectorOpacity {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const vectorProps = getVectorOpacityProps(id, mainState)

  const opacityModeHooks = useOpacityMode(item, vectorProps)
  const staticOpacityHooks = useStaticOpacity(
    item,
    vectorProps,
    opacityModeHooks.value
  )
  const dynamicOpacityHooks = useDynamicOpacity(
    item,
    vectorProps,
    opacityModeHooks.value
  )

  return {
    opacityModeHooks,
    staticOpacityHooks,
    dynamicOpacityHooks
  }
}

export default useVectorOpacity

function getVectorOpacityProps(
  id: "velocityVector" | "accelerationVector",
  mainState: MainState
): VectorOpacityProps {
  const vectorData = mainState[id]

  return {
    opacityMode: vectorData.opacityMode,
    maxOpacity: vectorData.maxOpacity,
    maxOpacityMagnitude: vectorData.maxOpacityMagnitude,
    minOpacity: vectorData.minOpacity,
    minOpacityMagnitude: vectorData.minOpacityMagnitude,
    opacity: vectorData.opacity
  }
}
