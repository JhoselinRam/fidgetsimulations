import { useContext } from "react"
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
  ObjectPositionProps,
  UseObjectPosition
} from "./useObjectPosition_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type { ContainerState } from "../useMainState/resources/Container/Container_types"
import type { ObstacleState } from "../useMainState/resources/Obstacle/Obstacle_types"

function useObjectPosition(item: CollectionOrder): UseObjectPosition {
  const { mainState, dispatch } = useContext(mainStateContext)
  const objectValues = getContainerProps(item, mainState)

  function setAspectRatio(): void {
    const collection = getCollection<ContainerState | ObstacleState>(
      item,
      mainState,
      ["container", "obstacle"]
    )
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
    ...objectValues,
    setAspectRatio
  }
}

export default useObjectPosition

function getContainerProps(
  item: CollectionOrder,
  state: MainState
): ObjectPositionProps {
  const collection = getCollection<ContainerState | ObstacleState>(
    item,
    state,
    ["container", "obstacle"]
  )

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
