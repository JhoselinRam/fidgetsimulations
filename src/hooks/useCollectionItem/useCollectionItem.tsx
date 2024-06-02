import { type Dispatch, type SetStateAction, useContext } from "react"
import type { UseCollectionItem } from "./useCollectionItem_types"
import { mainStateContext } from "../useMainState/useMainState"
import { itemIcon } from "./resources/Icons/Icons"
import useDeleteItem from "./resources/useDeleteItem/useDeleteItem"
import useItemName from "./resources/useItemName/useItemName"
import type { Selection } from "react-aria-components"
import type { CollectionOrder } from "../useMainState/useMainState_types"

function useCollectionItem(
  item: CollectionOrder,
  setSelection: Dispatch<SetStateAction<Selection>>
): UseCollectionItem {
  const { mainState, dispatch } = useContext(mainStateContext)
  const { onDelete } = useDeleteItem(dispatch, item)
  const { name } = useItemName(mainState, item)
  const icon = itemIcon[item.type]
  const isDisabled = mainState.simulation.run

  function selectOnAction(): void {
    setSelection(new Set([item.id]))
  }

  return {
    name,
    icon,
    onDelete,
    selectOnAction,
    isDisabled
  }
}
// --------------------------------------------------------

export default useCollectionItem
