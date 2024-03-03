import { useContext } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useCollectionPosition from "./resources/useCollectionPosition/useCollectionPosition"
import type { UseMoveCollection } from "./useMoveCollection_types"
import { mainStateContext } from "../useMainState/useMainState"
import useCollectionSize from "./resources/useCollectionSize/useCollectionSize"

function useMoveCollection(item: CollectionOrder): UseMoveCollection {
  const { dispatch, mainState } = useContext(mainStateContext)
  const moveControlProps = useCollectionPosition(item, mainState, dispatch)
  const sizeControlProps = useCollectionSize(item, mainState, dispatch)

  return {
    moveControlProps,
    sizeControlProps
  }
}

export default useMoveCollection
