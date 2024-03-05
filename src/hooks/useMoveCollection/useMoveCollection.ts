import { useContext } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useCollectionPosition from "./resources/useCollectionPosition/useCollectionPosition"
import type { UseMoveCollection } from "./useMoveCollection_types"
import { mainStateContext } from "../useMainState/useMainState"
import useCollectionSize from "./resources/useCollectionSize/useCollectionSize"
import useCollectionManual from "./resources/useCollectionManual/useCollectionManual"

function useMoveCollection(item: CollectionOrder): UseMoveCollection {
  const { dispatch, mainState } = useContext(mainStateContext)
  const manualControlProps = useCollectionManual(item, dispatch)
  const moveControlProps = useCollectionPosition(item, mainState, dispatch)
  const sizeControlProps = useCollectionSize(item, mainState, dispatch)

  return {
    moveControlProps,
    sizeControlProps,
    manualControlProps
  }
}

export default useMoveCollection
