import { useContext, useState } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseAxisConfig } from "./useAxisConfig_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getChartCollection } from "../useMainState/resources/GraphicElement/GraphicElement"
import useAxisValue from "./resources/useAxisValue/useAxisValue"

function useAxisConfig(item: CollectionOrder): UseAxisConfig {
  const { dispatch, mainState } = useContext(mainStateContext)
  const collection = getChartCollection(item, mainState)
  const [isLink, setIsLink] = useState(false)
  const [ratio, setRatio] = useState(1)
  const xHooks = useAxisValue(
    item,
    dispatch,
    collection,
    "x",
    isLink,
    setIsLink,
    ratio
  )
  const yHooks = useAxisValue(
    item,
    dispatch,
    collection,
    "y",
    isLink,
    setIsLink,
    ratio
  )

  function onChangeLink(value: boolean): void {
    if (value) {
      xHooks.coupleHooks.setCouple(false)
      xHooks.coupleHooks.setZoom(false)
      yHooks.coupleHooks.setCouple(false)
      yHooks.coupleHooks.setZoom(false)
      setRatio((xHooks.end - xHooks.start) / (yHooks.end - yHooks.start))
    }
    setIsLink(value)
  }

  return {
    axisHooks: {
      x: xHooks,
      y: yHooks
    },
    linkHooks: {
      isSelected: isLink,
      onChange: onChangeLink
    }
  }
}

export default useAxisConfig
