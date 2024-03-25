import { useCallback, useContext, useEffect, useState } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type {
  ColorActionSelector,
  ColorSetterSelector,
  UseAxisColorConfig
} from "./useAxisColorConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import type { AxisColor } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { LinechartState } from "../useMainState/resources/Linechart/LineChart_types"

function useAxisColorConfig(item: CollectionOrder): UseAxisColorConfig {
  const { dispatch, mainState } = useContext(mainStateContext)
  const { background, colorX, colorY, opacityX, opacityY } = getColors(
    getChartCollection(item, mainState)
  )
  const [innerBackground, setInnerBackground] = useState(background)
  const [innerColorX, setInnerColorX] = useState(colorX)
  const [innerOpacityX, setInnerOpacityX] = useState(opacityX)
  const [innerColorY, setInnerColorY] = useState(colorY)
  const [innerOpacityY, setInnerOpacityY] = useState(opacityY)

  const updateColor = useCallback(
    (value: number | string, prop: keyof AxisColor) => {
      const action: ColorActionSelector = {
        background: "graphic@background",
        colorX: "graphic@colorX",
        opacityX: "graphic@opacityX",
        colorY: "graphic@colorY",
        opacityY: "graphic@opacityY"
      }

      const setter: ColorSetterSelector = {
        background: setInnerBackground,
        colorX: setInnerColorX,
        opacityX: setInnerOpacityX,
        colorY: setInnerColorY,
        opacityY: setInnerOpacityY
      }

      const payload: Record<string, unknown> = { ...item }
      payload[prop] = value

      dispatch({ type: action[prop], payload })

      const setValue = setter[prop]
      setValue(value as never)
    },
    [item, dispatch]
  )

  const changeBackground = useCallback(
    (color: string): void => {
      updateColor(color, "background")
    },
    [updateColor]
  )

  const changeColorX = useCallback(
    (color: string): void => {
      updateColor(color, "colorX")
    },
    [updateColor]
  )

  const changeOpacityX = useCallback(
    (opacity: number): void => {
      updateColor(opacity, "opacityX")
    },
    [updateColor]
  )

  const changeColorY = useCallback(
    (color: string): void => {
      updateColor(color, "colorY")
    },
    [updateColor]
  )

  const changeOpacityY = useCallback(
    (opacity: number): void => {
      updateColor(opacity, "opacityY")
    },
    [updateColor]
  )

  useEffect(() => {
    changeBackground(background)
  }, [background, changeBackground])

  useEffect(() => {
    changeColorX(colorX)
  }, [colorX, changeColorX])

  useEffect(() => {
    changeOpacityX(opacityX)
  }, [opacityX, changeOpacityX])

  useEffect(() => {
    changeColorY(colorY)
  }, [colorY, changeColorY])

  useEffect(() => {
    changeOpacityY(opacityY)
  }, [opacityY, changeOpacityY])

  return {
    backgroundHooks: {
      value: innerBackground,
      onInput: changeBackground
    },
    axisHooks: {
      x: {
        color: innerColorX,
        colorChange: changeColorX,
        opacity: innerOpacityX,
        changeOpacity: changeOpacityX
      },
      y: {
        color: innerColorY,
        colorChange: changeColorY,
        opacity: innerOpacityY,
        changeOpacity: changeOpacityY
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
