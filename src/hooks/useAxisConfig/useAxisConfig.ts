import { useContext } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseAxisConfig } from "./useAxisConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"

function useAxisConfig(item: CollectionOrder): UseAxisConfig {
  const { dispatch, mainState } = useContext(mainStateContext)
  const collection = getChartCollection(item, mainState)

  return {}
}

export default useAxisConfig
