import { useCallback, useContext, useEffect, useState } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type {
  ActionByProp,
  SetByProp,
  UseAxisConfig
} from "./useAxisConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import type { AxisDomain } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { LinechartState } from "../useMainState/resources/Linechart/LineChart_types"

function useAxisConfig(item: CollectionOrder): UseAxisConfig {
  const { dispatch, mainState } = useContext(mainStateContext)
  const collection = getChartCollection(item, mainState)
  // Main state axis value
  const mainStartX = getAxisValue(collection, "startX")
  const mainEndX = getAxisValue(collection, "endX")
  const mainStartY = getAxisValue(collection, "startY")
  const mainEndY = getAxisValue(collection, "endY")
  // Axis value states
  const [startX, setStartX] = useState(mainStartX)
  const [endX, setEndX] = useState(mainEndX)
  const [startY, setStartY] = useState(mainStartY)
  const [endY, setEndY] = useState(mainEndY)
  // Axis couple states
  const [isCoupleX, setIsCoupleX] = useState(false)
  const [isCoupleY, setIsCoupleY] = useState(false)
  const [isZoomX, setIsZoomX] = useState(false)
  const [isZoomY, setIsZoomY] = useState(false)
  // Common axis states
  const [isLink, setIsLink] = useState(false)
  const [ratio, setRatio] = useState(1)

  // --------- Change the value of the isLink state ---------
  function onChangeLink(value: boolean): void {
    if (value) {
      setIsCoupleX(false)
      setIsZoomX(false)
      setIsCoupleY(false)
      setIsZoomY(false)
      setRatio((endX - startX) / (endY - startY))
    }
    setIsLink(value)
  }

  // --------- Change the values of the isCouple states ---------
  function changeCoupleX(value: boolean): void {
    if (value && isZoomX) setIsZoomX(false)
    if (value && isLink) setIsLink(false)

    setIsCoupleX(value)
  }

  function changeCoupleY(value: boolean): void {
    if (value && isZoomY) setIsZoomY(false)
    if (value && isLink) setIsLink(false)

    setIsCoupleY(value)
  }

  // --------- Change the values of the isZoom states ---------
  function changeZoomX(value: boolean): void {
    if (value && isCoupleX) setIsCoupleX(false)
    if (value && isLink) setIsLink(false)

    setIsZoomX(value)
  }

  function changeZoomY(value: boolean): void {
    if (value && isCoupleY) setIsCoupleY(false)
    if (value && isLink) setIsLink(false)

    setIsZoomY(value)
  }

  // Updates the axis value in both the main and local state
  const updateAxis = useCallback(
    (value: number, prop: keyof AxisDomain): void => {
      const action: ActionByProp = {
        startX: "graphic@startX",
        endX: "graphic@endX",
        startY: "graphic@startY",
        endY: "graphic@endY"
      }
      const setter: SetByProp = {
        startX: setStartX,
        endX: setEndX,
        startY: setStartY,
        endY: setEndY
      }

      const payload: Record<string, unknown> = { ...item }
      payload[prop] = value
      dispatch({ type: action[prop], payload })

      setter[prop](value)
    },
    [dispatch, item]
  )

  // ---------- Change callbacks for the axis value ----------

  const changeStartX = useCallback(
    (value: number): void => {
      updateAxis(value, "startX")

      if (isCoupleX || isZoomX) {
        let delta = value - startX
        if (isZoomX) delta *= -1

        updateAxis(endX + delta, "endX")
      }

      if (isLink) {
        const delta = value - startX

        updateAxis(endX - delta, "endX")
        updateAxis(startY + delta / ratio, "startY")
        updateAxis(endY - delta / ratio, "endY")
      }
    },
    [endX, isCoupleX, isZoomX, startX, updateAxis, isLink, startY, endY, ratio]
  )

  const changeEndX = useCallback(
    (value: number): void => {
      updateAxis(value, "endX")

      if (isCoupleX || isZoomX) {
        let delta = value - endX
        if (isZoomX) delta *= -1

        updateAxis(startX + delta, "startX")
      }

      if (isLink) {
        const delta = value - endX

        updateAxis(startX - delta, "startX")
        updateAxis(startY - delta / ratio, "startY")
        updateAxis(endY + delta / ratio, "endY")
      }
    },
    [endX, isCoupleX, isZoomX, startX, updateAxis, endY, isLink, ratio, startY]
  )

  const changeStartY = useCallback(
    (value: number): void => {
      updateAxis(value, "startY")

      if (isCoupleY || isZoomY) {
        let delta = value - startY
        if (isZoomY) delta *= -1

        updateAxis(endY + delta, "endY")
      }

      if (isLink) {
        const delta = value - startY

        updateAxis(endY - delta, "endY")
        updateAxis(startX + delta * ratio, "startX")
        updateAxis(endX - delta * ratio, "endX")
      }
    },
    [endY, isCoupleY, isZoomY, startY, updateAxis, endX, isLink, ratio, startX]
  )

  const changeEndY = useCallback(
    (value: number): void => {
      updateAxis(value, "endY")

      if (isCoupleY || isZoomY) {
        let delta = value - endY
        if (isZoomY) delta *= -1

        updateAxis(startY + delta, "startY")
      }

      if (isLink) {
        const delta = value - endY

        updateAxis(startY - delta, "startY")
        updateAxis(startX - delta * ratio, "startX")
        updateAxis(endX + delta * ratio, "endX")
      }
    },
    [endY, isCoupleY, isZoomY, startY, updateAxis, endX, isLink, ratio, startX]
  )

  useEffect(() => {
    changeStartX(mainStartX)
  }, [mainStartX, changeStartX])

  useEffect(() => {
    changeEndX(mainEndX)
  }, [mainEndX, changeEndX])

  useEffect(() => {
    changeStartY(mainStartY)
  }, [mainStartY, changeStartY])

  useEffect(() => {
    changeEndY(mainEndY)
  }, [mainEndY, changeEndY])

  return {
    axisHooks: {
      x: {
        start: startX,
        end: endX,
        changeStart: changeStartX,
        changeEnd: changeEndX,
        coupleHooks: {
          couple: isCoupleX,
          setCouple: changeCoupleX,
          zoom: isZoomX,
          setZoom: changeZoomX
        }
      },
      y: {
        start: startY,
        end: endY,
        changeStart: changeStartY,
        changeEnd: changeEndY,
        coupleHooks: {
          couple: isCoupleY,
          setCouple: changeCoupleY,
          zoom: isZoomY,
          setZoom: changeZoomY
        }
      }
    },
    linkHooks: {
      isSelected: isLink,
      onChange: onChangeLink
    }
  }
}

export default useAxisConfig

function getAxisValue(
  collection: SimulationWindowState | LinechartState | undefined,
  prop: keyof AxisDomain
): number {
  if (collection == null) return prop === "startX" || prop === "startY" ? -5 : 5

  return collection[prop]
}
