import { useContext } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseAxisConfig } from "./useAxisConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import useAxisValue from "./resources/useAxisValue/useAxisValue"

function useAxisConfig(item: CollectionOrder): UseAxisConfig {
  const { dispatch, mainState } = useContext(mainStateContext)
  const collection = getChartCollection(item, mainState)
  const xHook = useAxisValue(item, dispatch, collection, "x")
  const yHook = useAxisValue(item, dispatch, collection, "y")

  return {
    axisHooks: {
      x: xHook,
      y: yHook
    }
  }
}

export default useAxisConfig
