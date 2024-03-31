import { useContext } from "react"
import { getContainerCollection } from "../useMainState/resources/Container/Container"
import {
  containerPositionDefaultState,
  containerRatioLockDefaultState,
  containerSizeDefaultState
} from "../useMainState/resources/Container/defaultState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  ContainerPositionProps,
  UseContainerPosition
} from "./useContainerPosition_types"
import { mainStateContext } from "../useMainState/useMainState"

function useContainerPosition(item: CollectionOrder): UseContainerPosition {
  const { mainState, dispatch } = useContext(mainStateContext)
  const containerValues = getContainerProps(item, mainState)

  function setAspectRatio(): void {
    const collection = getContainerCollection(item, mainState)
    if (collection == null) return

    dispatch({
      type: "container@height",
      payload: {
        ...item,
        height: collection.width
      }
    })
  }

  return {
    ...containerValues,
    setAspectRatio
  }
}

export default useContainerPosition

function getContainerProps(
  item: CollectionOrder,
  state: MainState
): ContainerPositionProps {
  const collection = getContainerCollection(item, state)

  if (collection == null)
    return {
      ...containerPositionDefaultState,
      ...containerSizeDefaultState,
      ...containerRatioLockDefaultState
    }

  return {
    positionX: collection.positionX,
    positionY: collection.positionY,
    width: collection.width,
    height: collection.height,
    ratioLock: collection.ratioLock
  }
}
