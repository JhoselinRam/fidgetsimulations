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
  axis: "x" | "y",
  isLink: boolean,
  setIsLink: (value: boolean) => void,
  ratio: number
): UseAxisValue {
  const {
    endProp,
    startProp,
    endAction,
    startAction,
    complementEndProp,
    complementStartAction,
    complementStartProp
  } = getAxisProps(axis)
  const collectionStart = collection == null ? -5 : collection[startProp]
  const collectionEnd = collection == null ? 5 : collection[endProp]
  const complementEnd = collection == null ? 5 : collection[complementEndProp]
  const [start, setStart] = useState(collectionStart)
  const [end, setEnd] = useState(collectionEnd)
  const [couple, setCouple] = useState(false)
  const [zoom, setZoom] = useState(false)

  const changeStart = useCallback(
    (value: number): void => {
      const newStart = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      const payload: Record<string, unknown> = { ...item }
      payload[startProp] = newStart
      // Updates the start value
      dispatch({
        type: startAction,
        payload
      })
      setStart(newStart)

      // If the couple or zoom is active, update the end value
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

      if (isLink) {
        const ratioUsed = axis === "x" ? 1 / ratio : ratio
        const newComplement = toRounded(
          complementEnd - (end - newStart) * ratioUsed,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )

        const payload: Record<string, unknown> = { ...item }
        payload[complementStartProp] = newComplement

        dispatch({
          type: complementStartAction,
          payload
        })
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
      zoom,
      axis,
      complementEnd,
      complementStartAction,
      complementStartProp,
      isLink,
      ratio
    ]
  )

  const changeEnd = useCallback(
    (value: number): void => {
      const newEnd = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      const payload: Record<string, unknown> = { ...item }
      payload[endProp] = newEnd

      // Update the end value
      dispatch({
        type: endAction,
        payload
      })
      setEnd(newEnd)

      // If the couple or zoom is active, update the start value
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

      // if (isLink) {
      //   const ratioUsed = axis === "x" ? 1 / ratio : ratio
      //   const newComplement = toRounded(
      //     complementStart + (newEnd - start) * ratioUsed,
      //     import.meta.env.VITE_ROUNDED_DECIMALS
      //   )

      //   const payload: Record<string, unknown> = { ...item }
      //   payload[complementEndProp] = newComplement
      //   dispatch({
      //     type: complementEndAction,
      //     payload
      //   })
      // }
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
      // axis,
      // complementStart,
      // complementEndAction,
      // complementEndProp,
      // isLink,
      // ratio
    ]
  )

  useEffect(() => {
    changeStart(collectionStart)
    setStart(collectionStart)
  }, [collectionStart, changeStart])

  useEffect(() => {
    changeEnd(collectionEnd)
    setEnd(collectionEnd)
  }, [collectionEnd, changeEnd])

  function changeCouple(value: boolean): void {
    if (value && zoom) setZoom(false)
    if (value && isLink) setIsLink(false)

    setCouple(value)
  }

  function changeZoom(value: boolean): void {
    if (value && couple) setCouple(false)
    if (value && isLink) setIsLink(false)

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
      endAction: "graphic@endX",
      complementStartProp: "startY",
      complementEndProp: "endY",
      complementStartAction: "graphic@startY",
      complementEndAction: "graphic@endY"
    }
  }

  return {
    startProp: "startY",
    endProp: "endY",
    startAction: "graphic@startY",
    endAction: "graphic@endY",
    complementStartProp: "startX",
    complementEndProp: "endX",
    complementStartAction: "graphic@startX",
    complementEndAction: "graphic@endX"
  }
}
