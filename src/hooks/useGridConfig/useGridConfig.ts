import { useContext } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseGridConfig } from "./useGridConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { LinechartState } from "../useMainState/resources/Linechart/LineChart_types"
import type { Grid } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import useBindState from "../useBindState/useBindState"

function useGridConfig(item: CollectionOrder): UseGridConfig {
  const { mainState } = useContext(mainStateContext)
  const collection = getChartCollection(item, mainState)
  const {
    gridPrimaryColor,
    gridPrimaryEnable,
    gridSecondaryColor,
    gridSecondaryEnable
  } = getGridProps(collection)
  const primaryEnable = useBindState(
    item,
    gridPrimaryEnable,
    "graphic@gridPrimaryEnable"
  )
  const primaryColor = useBindState(
    item,
    gridPrimaryColor,
    "graphic@gridPrimaryColor"
  )
  const secondaryEnable = useBindState(
    item,
    gridSecondaryEnable,
    "graphic@gridSecondaryEnable"
  )
  const secondaryColor = useBindState(
    item,
    gridSecondaryColor,
    "graphic@gridSecondaryColor"
  )

  return {
    primary: {
      enable: primaryEnable.value,
      changeEnable: primaryEnable.changeValue,
      color: primaryColor.value,
      changeColor: primaryColor.changeValue
    },
    secondary: {
      enable: secondaryEnable.value,
      changeEnable: secondaryEnable.changeValue,
      color: secondaryColor.value,
      changeColor: secondaryColor.changeValue
    }
  }
}

export default useGridConfig

function getGridProps(
  collection: SimulationWindowState | LinechartState | undefined
): Grid {
  if (collection == null)
    return {
      gridPrimaryEnable: true,
      gridPrimaryColor: "#000000",
      gridSecondaryEnable: true,
      gridSecondaryColor: "#000000"
    }

  return {
    gridPrimaryEnable: collection.gridPrimaryEnable,
    gridPrimaryColor: collection.gridPrimaryColor,
    gridSecondaryEnable: collection.gridSecondaryEnable,
    gridSecondaryColor: collection.gridSecondaryColor
  }
}
