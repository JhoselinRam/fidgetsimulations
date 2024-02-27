import type { Dispatch } from "react"
import type {
  CollectionOrder,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseDeleteItem } from "./useDeleteItem_types"

function useDeleteItem(
  dispatch: Dispatch<MainStateAction>,
  item: CollectionOrder
): UseDeleteItem {
  function onDelete(): void {
    dispatch({
      type: "collection@delete",
      payload: {
        id: item.id,
        type: item.type
      }
    })
  }

  return {
    onDelete
  }
}

export default useDeleteItem
