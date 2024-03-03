import { useState, type Dispatch, useEffect } from "react"
import type {
  CollectionOrder,
  MainState,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import { isGraphicalCollection } from "../../../useMainState/useMainState"
import type { UseCollectionSize } from "./useCollectionSize_types"

function useCollectionSize(
  item: CollectionOrder,
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): UseCollectionSize {
  const [width, setWidth] = useState(getInitialSize(item, state, "x"))
  const [height, setHeight] = useState(getInitialSize(item, state, "y"))

  useEffect(() => {
    dispatch({
      type: "graphic@width",
      payload: {
        ...item,
        width
      }
    })
  }, [width, dispatch, item])

  useEffect(() => {
    dispatch({
      type: "graphic@height",
      payload: {
        ...item,
        height
      }
    })
  }, [height, dispatch, item])

  return {
    width,
    height,
    changeHeight: setHeight,
    changeWidth: setWidth
  }
}

export default useCollectionSize

function getInitialSize(
  item: CollectionOrder,
  state: MainState,
  axis: "x" | "y"
): number {
  if (!isGraphicalCollection(item.type)) return 0

  const index = state[item.type].findIndex(
    (collection) => collection.id === item.id || collection.type === item.type
  )
  const collection = state[item.type][index]

  return axis === "x" ? collection.width : collection.height
}
