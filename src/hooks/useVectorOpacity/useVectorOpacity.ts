import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  UseVectorOpacity,
  VectorOpacityProps
} from "./useVectorOpacity_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import useOpacityMode from "./resources/useOpacityMode/useOpacityMode"
import useStaticOpacity from "./resources/useStaticOpacity/useStaticOpacity"
import useDynamicOpacity from "./resources/useDynamicOpacity/useDynamicOpacity"
import { VectorState } from "../useMainState/resources/Vector/Vector_types"
import { vectorDefaultState } from "../useMainState/resources/Vector/defaultState"

function useVectorOpacity(item: CollectionOrder): UseVectorOpacity {
  const { mainState } = useContext(mainStateContext)
  const vectorProps = getVectorOpacityProps(item, mainState)

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
  item: CollectionOrder,
  mainState: MainState
): VectorOpacityProps {
  const collection = getCollection<VectorState>(item, mainState, [
    "velocityVector",
    "accelerationVector"
  ])

  if (collection == null)
    return {
      opacityMode: vectorDefaultState.opacityMode,
      maxOpacity: vectorDefaultState.maxOpacity,
      maxOpacityMagnitude: vectorDefaultState.maxOpacityMagnitude,
      minOpacity: vectorDefaultState.minOpacity,
      minOpacityMagnitude: vectorDefaultState.minOpacityMagnitude,
      opacity: vectorDefaultState.opacity
    }

  return {
    opacityMode: collection.opacityMode,
    maxOpacity: collection.maxOpacity,
    maxOpacityMagnitude: collection.maxOpacityMagnitude,
    minOpacity: collection.minOpacity,
    minOpacityMagnitude: collection.minOpacityMagnitude,
    opacity: collection.opacity
  }
}
