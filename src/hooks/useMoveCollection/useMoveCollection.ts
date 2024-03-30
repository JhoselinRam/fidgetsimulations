import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  MoveCollectionProps,
  UseMoveCollection
} from "./useMoveCollection_types"
import {
  getGraphicalCollection,
  mainStateContext
} from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"

function useMoveCollection(item: CollectionOrder): UseMoveCollection {
  const { mainState } = useContext(mainStateContext)
  const collectionValue = getMoveCollectionProps(item, mainState)
  const manualHooks = useBindState(
    item,
    collectionValue.manualEdit,
    "graphic@manualEdit"
  )

  return {
    manualControlProps: {
      isSelected: manualHooks.value,
      onChange: manualHooks.changeValue
    },
    ...collectionValue
  }
}

export default useMoveCollection

function getMoveCollectionProps(
  item: CollectionOrder,
  state: MainState
): MoveCollectionProps {
  const collection = getGraphicalCollection(item, state)

  if (collection == null)
    return {
      positionX: 0,
      positionY: 0,
      width: 500,
      height: 500,
      lockRatio: false,
      manualEdit: false
    }

  return {
    positionX: collection.positionX,
    positionY: collection.positionY,
    width: collection.width,
    height: collection.height,
    lockRatio: collection.lockRatio,
    manualEdit: collection.manualEdit
  }
}
