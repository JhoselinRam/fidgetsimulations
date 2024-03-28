import { useCallback, useContext, useEffect, useState } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type {
  GridActionSelector,
  GridSetterSelector,
  UseGridConfig
} from "./useGridConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { LinechartState } from "../useMainState/resources/Linechart/LineChart_types"
import type { Grid } from "../useMainState/resources/GraphicElement/GraphicElement_types"

function useGridConfig(item: CollectionOrder): UseGridConfig {
  const { dispatch, mainState } = useContext(mainStateContext)
  const collection = getChartCollection(item, mainState)
  const {
    gridPrimaryColor,
    gridPrimaryEnable,
    gridSecondaryColor,
    gridSecondaryEnable
  } = getGridProps(collection)

  const [primaryEnable, setPrimaryEnable] = useState(gridPrimaryEnable)
  const [primaryColor, setPrimaryColor] = useState(gridPrimaryColor)
  const [secondaryEnable, setSecondaryEnable] = useState(gridSecondaryEnable)
  const [secondaryColor, setSecondaryColor] = useState(gridSecondaryColor)

  const updateGrid = useCallback(
    (value: boolean | string, prop: keyof Grid) => {
      const action: GridActionSelector = {
        gridPrimaryEnable: "graphic@gridPrimaryEnable",
        gridPrimaryColor: "graphic@gridPrimaryColor",
        gridSecondaryEnable: "graphic@gridSecondaryEnable",
        gridSecondaryColor: "graphic@gridSecondaryColor"
      }
      const setter: GridSetterSelector = {
        gridPrimaryEnable: setPrimaryEnable,
        gridPrimaryColor: setPrimaryColor,
        gridSecondaryEnable: setSecondaryEnable,
        gridSecondaryColor: setSecondaryColor
      }

      const payload: Record<string, unknown> = { ...item }
      payload[prop] = value

      dispatch({ type: action[prop], payload })
      setter[prop](value as never)
    },
    [item, dispatch]
  )

  const changePrimaryEnable = useCallback(
    (enable: boolean) => {
      updateGrid(enable, "gridPrimaryEnable")
    },
    [updateGrid]
  )

  const changePrimaryColor = useCallback(
    (color: string) => {
      updateGrid(color, "gridPrimaryColor")
    },
    [updateGrid]
  )

  const changeSecondaryEnable = useCallback(
    (enable: boolean) => {
      updateGrid(enable, "gridSecondaryEnable")
    },
    [updateGrid]
  )

  const changeSecondaryColor = useCallback(
    (color: string) => {
      updateGrid(color, "gridSecondaryColor")
    },
    [updateGrid]
  )

  useEffect(() => {
    changePrimaryEnable(gridPrimaryEnable)
  }, [gridPrimaryEnable, changePrimaryEnable])

  useEffect(() => {
    changePrimaryColor(gridPrimaryColor)
  }, [gridPrimaryColor, changePrimaryColor])

  useEffect(() => {
    changeSecondaryEnable(gridSecondaryEnable)
  }, [gridSecondaryEnable, changeSecondaryEnable])

  useEffect(() => {
    changeSecondaryColor(gridSecondaryColor)
  }, [gridSecondaryColor, changeSecondaryColor])

  return {
    primary: {
      enable: primaryEnable,
      changeEnable: changePrimaryEnable,
      color: primaryColor,
      changeColor: changePrimaryColor
    },
    secondary: {
      enable: secondaryEnable,
      changeEnable: changeSecondaryEnable,
      color: secondaryColor,
      changeColor: changeSecondaryColor
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
