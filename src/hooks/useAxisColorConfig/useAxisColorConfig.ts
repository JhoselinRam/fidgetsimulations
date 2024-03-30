import { useContext } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseAxisColorConfig } from "./useAxisColorConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import type { AxisColor } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { LinechartState } from "../useMainState/resources/Linechart/LineChart_types"
import useBindState from "../useBindState/useBindState"

function useAxisColorConfig(item: CollectionOrder): UseAxisColorConfig {
  const { mainState } = useContext(mainStateContext)
  const { background, colorX, colorY, opacityX, opacityY } = getColors(
    getChartCollection(item, mainState)
  )
  const backgroundState = useBindState(item, background, "graphic@background")
  const xColorState = useBindState(item, colorX, "graphic@colorX")
  const yColorState = useBindState(item, colorY, "graphic@colorY")
  const xOpacityState = useBindState(item, opacityX, "graphic@opacityX")
  const yOpacityState = useBindState(item, opacityY, "graphic@opacityY")

  return {
    backgroundHooks: {
      value: backgroundState.value,
      onInput: backgroundState.changeValue
    },
    axisHooks: {
      x: {
        color: xColorState.value,
        colorChange: xColorState.changeValue,
        opacity: xOpacityState.value,
        changeOpacity: xOpacityState.changeValue
      },
      y: {
        color: yColorState.value,
        colorChange: yColorState.changeValue,
        opacity: yOpacityState.value,
        changeOpacity: yOpacityState.changeValue
      }
    }
  }
}

export default useAxisColorConfig

function getColors(
  collection: SimulationWindowState | LinechartState | undefined
): AxisColor {
  if (collection == null)
    return {
      background: "#ffffff",
      colorX: "#000000",
      opacityX: 1,
      colorY: "#000000",
      opacityY: 1
    }

  return {
    background: collection.background,
    colorX: collection.colorX,
    opacityX: collection.opacityX,
    colorY: collection.colorY,
    opacityY: collection.opacityY
  }
}
