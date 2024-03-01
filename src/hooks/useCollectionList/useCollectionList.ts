import { useContext, useEffect, useState } from "react"
import type { UseCollectionList } from "./useCollectionList_types"
import { mainStateContext } from "../useMainState/useMainState"
import useListSelection from "./resources/useListSelection/useListSelection"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import useListReorder from "./resources/useListReorder/useListReorder"

function useCollectionList(): UseCollectionList {
  const { selection, setSelection } = useListSelection()
  const { mainState, dispatch } = useContext(mainStateContext)
  const [items, setItems] = useState<CollectionOrder[]>([])
  const { dragAndDropHooks } = useListReorder(mainState, dispatch)

  // --------------------------------------------------------
  // --------------------------------------------------------
  const orderCheck = JSON.stringify(mainState.order)
  useEffect(() => {
    const elementOrder = mainState.order.slice().reverse()

    setItems(
      elementOrder.map((element) => {
        return { ...element }
      })
    )
  }, [orderCheck, mainState.order])
  // --------------------------------------------------------

  return {
    items,
    selection,
    setSelection,
    dragAndDropHooks
  }
}

export default useCollectionList
