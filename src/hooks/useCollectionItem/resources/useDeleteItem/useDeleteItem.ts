import { useContext, type Dispatch } from "react"
import type {
  CollectionOrder,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseDeleteItem } from "./useDeleteItem_types"
import { toolBarContext } from "../../../../components/ToolBar/context"

function useDeleteItem(
  dispatch: Dispatch<MainStateAction>,
  item: CollectionOrder
): UseDeleteItem {
  const { targetCollection, setTargetCollection } = useContext(toolBarContext)

  function onDelete(): void {
    // Closes the config bar if the collection to be deleted is its target
    if (targetCollection?.id === item.id && targetCollection.type === item.type)
      setTargetCollection(null)

    // Deletes the collection
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
