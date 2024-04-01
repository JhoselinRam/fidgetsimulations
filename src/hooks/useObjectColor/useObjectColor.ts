import { useContext, useRef, useState } from "react"
import {
  containerBorderDefaultState,
  containerFillDefaultState
} from "../useMainState/resources/Container/defaultState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  ObjectColorProps,
  ObjectActionSelector,
  UseObjectColor
} from "./useObjectColor_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"
import type { ContainerState } from "../useMainState/resources/Container/Container_types"
import type { ObstacleState } from "../useMainState/resources/Obstacle/Obstacle_types"

function useObjectColor(item: CollectionOrder): UseObjectColor {
  const { mainState } = useContext(mainStateContext)
  const { borderColor, borderOpacity, borderWidth, fillColor, fillOpacity } =
    getContainerColorProps(item, mainState)
  const selectorType = item.type as keyof ObjectActionSelector

  const borderColorState = useBindState(
    item,
    borderColor,
    actionSelector[selectorType].borderColor
  )
  const borderOpacityState = useBindState(
    item,
    borderOpacity,
    actionSelector[selectorType].borderOpacity
  )
  const borderWidthState = useBindState(
    item,
    borderWidth,
    actionSelector[selectorType].borderWidth
  )
  const backgroundColorState = useBindState(
    item,
    fillColor,
    actionSelector[selectorType].fillColor
  )
  const backgroundOpacityState = useBindState(
    item,
    fillOpacity,
    actionSelector[selectorType].fillOpacity
  )
  const [borderEnable, setBorderEnable] = useState(true)
  const [backgroundEnable, setBackgroundEnable] = useState(
    item.type !== "container"
  )
  const lastBorderOpacity = useRef(borderOpacity)
  const lastBackgroundOpacity = useRef(fillOpacity)

  function changeBorderEnable(value: boolean): void {
    if (value) {
      borderOpacityState.changeValue(lastBorderOpacity.current)
    } else {
      lastBorderOpacity.current = borderOpacityState.value
      borderOpacityState.changeValue(0)
    }

    setBorderEnable(value)
  }

  function changeBackgroundEnable(value: boolean): void {
    if (value) {
      backgroundOpacityState.changeValue(lastBackgroundOpacity.current)
    } else {
      lastBackgroundOpacity.current = backgroundOpacityState.value
      backgroundOpacityState.changeValue(0)
    }

    setBackgroundEnable(value)
  }

  return {
    borderHooks: {
      enable: borderEnable,
      changeEnable: changeBorderEnable,
      color: borderColorState.value,
      changeColor: borderColorState.changeValue,
      opacity: borderOpacityState.value,
      changeOpacity: borderOpacityState.changeValue,
      width: borderWidthState.value,
      changeWidth: borderWidthState.changeValue
    },
    backgroundHooks: {
      enable: backgroundEnable,
      changeEnable: changeBackgroundEnable,
      color: backgroundColorState.value,
      changeColor: backgroundColorState.changeValue,
      opacity: backgroundOpacityState.value,
      changeOpacity: backgroundOpacityState.changeValue
    }
  }
}

export default useObjectColor

function getContainerColorProps(
  item: CollectionOrder,
  state: MainState
): ObjectColorProps {
  const collection = getCollection<ContainerState | ObstacleState>(
    item,
    state,
    ["container", "obstacle"]
  )

  if (collection == null)
    return {
      ...containerBorderDefaultState,
      ...containerFillDefaultState
    }

  return {
    borderColor: collection.borderColor,
    borderOpacity: collection.borderOpacity,
    borderWidth: collection.borderWidth,
    fillColor: collection.fillColor,
    fillOpacity: collection.fillOpacity
  }
}

const actionSelector: ObjectActionSelector = {
  container: {
    borderColor: "container@borderColor",
    borderOpacity: "container@borderOpacity",
    borderWidth: "container@borderWidth",
    fillColor: "container@fillColor",
    fillOpacity: "container@fillOpacity"
  },
  obstacle: {
    borderColor: "obstacle@borderColor",
    borderOpacity: "obstacle@borderOpacity",
    borderWidth: "obstacle@borderWidth",
    fillColor: "obstacle@fillColor",
    fillOpacity: "obstacle@fillOpacity"
  }
}
