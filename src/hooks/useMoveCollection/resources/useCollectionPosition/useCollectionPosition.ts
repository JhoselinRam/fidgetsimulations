import { useState, type Dispatch, useEffect } from "react"
import type {
  CollectionOrder,
  MainState,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseCollectionPosition } from "./useCollectionPosition_types"
import { isGraphicalCollection } from "../../../useMainState/useMainState"

function useCollectionPosition(
  item: CollectionOrder,
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): UseCollectionPosition {
  const [positionX, setPositionX] = useState(
    getInitialPosition(item, state, "x")
  )
  const [positionY, setPositionY] = useState(
    getInitialPosition(item, state, "y")
  )

  useEffect(() => {
    dispatch({
      type: "graphic@positionX",
      payload: {
        ...item,
        positionX
      }
    })
  }, [positionX, dispatch, item])

  useEffect(() => {
    dispatch({
      type: "graphic@positionY",
      payload: {
        ...item,
        positionY
      }
    })
  }, [positionY, dispatch, item])

  return {
    x: positionX,
    y: positionY,
    changeX: setPositionX,
    changeY: setPositionY
  }
}

export default useCollectionPosition

function getInitialPosition(
  item: CollectionOrder,
  state: MainState,
  axis: "x" | "y"
): number {
  if (!isGraphicalCollection(item.type)) return 0

  const index = state[item.type].findIndex(
    (collection) => collection.id === item.id || collection.type === item.type
  )
  const collection = state[item.type][index]

  return axis === "x" ? collection.positionX : collection.positionY
}
