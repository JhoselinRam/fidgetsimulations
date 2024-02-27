import { type KeyboardEvent, type Dispatch } from "react"
import type { UseItemRename } from "./useItemRename_types"
import type {
  CollectionOrder,
  MainStateAction
} from "../../../useMainState/useMainState_types"

function useItemRename(
  item: CollectionOrder,
  dispatch: Dispatch<MainStateAction>,
  resetEditing: () => void
): UseItemRename {
  function onChange(newName: string): void {
    dispatch({
      type: "collection@rename",
      payload: { id: item.id, type: item.type, name: newName }
    })
  }

  function onBlur(): void {
    resetEditing()
  }

  function onKeyDown(e: KeyboardEvent): void {
    e.bubbles = false
    console.log(e.code)
  }

  return {
    itemRenameProps: {
      onBlur,
      onChange,
      value: "",
      onKeyDown
    }
  }
}

export default useItemRename
