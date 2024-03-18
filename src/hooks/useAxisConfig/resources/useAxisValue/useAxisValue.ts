import { useState, type Dispatch, useEffect, useCallback } from "react"
import type { LinechartState } from "../../../useMainState/resources/Linechart/LineChart_types"
import type { SimulationWindowState } from "../../../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type {
  CollectionOrder,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { AxisProps, UseAxisValue } from "./useAxisValue_types"
import { toRounded } from "../../../../auxiliary/toRounded"

function useAxisValue(
  item: CollectionOrder,
  dispatch: Dispatch<MainStateAction>,
  collection: SimulationWindowState | LinechartState | undefined,
  axis: "x" | "y"
): UseAxisValue {
  const { endProp, startProp, endAction, startAction } = getAxisProps(axis)
  const collectionStart = collection == null ? -5 : collection[startProp]
  const collectionEnd = collection == null ? -5 : collection[endProp]
  const [start, setStart] = useState(collectionStart)
  const [end, setEnd] = useState(collectionEnd)
  const [couple, setCouple] = useState(false)
  const [zoom, setZoom] = useState(false)

  const changeStart = useCallback(
    (value: number): void => {
      const newStart = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      const payload: Record<string, unknown> = { ...item }
      payload[startProp] = newStart

      dispatch({
        type: startAction,
        payload
      })
      setStart(newStart)

      if (couple || zoom) {
        let delta = newStart - start
        if (zoom) delta *= -1
        const newEnd = toRounded(
          end + delta,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )
        const payload: Record<string, unknown> = { ...item }
        payload[endProp] = newEnd

        dispatch({
          type: endAction,
          payload
        })
        setEnd(newEnd)
      }
    },
    [
      item,
      startProp,
      dispatch,
      startAction,
      couple,
      start,
      end,
      endProp,
      endAction,
      zoom
    ]
  )

  const changeEnd = useCallback(
    (value: number): void => {
      const newEnd = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      const payload: Record<string, unknown> = { ...item }
      payload[endProp] = newEnd

      dispatch({
        type: endAction,
        payload
      })
      setEnd(newEnd)

      if (couple || zoom) {
        let delta = newEnd - end
        if (zoom) delta *= -1
        const newStart = toRounded(
          start + delta,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )
        const payload: Record<string, unknown> = { ...item }
        payload[startProp] = newStart

        dispatch({
          type: startAction,
          payload
        })
        setStart(newStart)
      }
    },
    [
      endProp,
      item,
      dispatch,
      endAction,
      couple,
      end,
      start,
      startAction,
      startProp,
      zoom
    ]
  )

  useEffect(() => {
    changeStart(collectionStart)
  }, [collectionStart, changeStart])

  useEffect(() => {
    changeEnd(collectionEnd)
  }, [collectionEnd, changeEnd])

  function changeCouple(value: boolean): void {
    if (value && zoom) setZoom(false)

    setCouple(value)
  }

  function changeZoom(value: boolean): void {
    if (value && couple) setCouple(false)

    setZoom(value)
  }

  return {
    start,
    end,
    changeEnd,
    changeStart,
    coupleHooks: {
      couple,
      setCouple: changeCouple,
      zoom,
      setZoom: changeZoom
    }
  }
}

export default useAxisValue

function getAxisProps(axis: "x" | "y"): AxisProps {
  if (axis === "x") {
    return {
      startProp: "startX",
      endProp: "endX",
      startAction: "graphic@startX",
      endAction: "graphic@endX"
    }
  }

  return {
    startProp: "startY",
    endProp: "endY",
    startAction: "graphic@startY",
    endAction: "graphic@endY"
  }
}
