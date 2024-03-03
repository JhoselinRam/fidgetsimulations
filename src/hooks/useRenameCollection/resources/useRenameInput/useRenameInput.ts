import {
  type RefObject,
  type Dispatch,
  type SetStateAction,
  type KeyboardEvent,
  type FocusEvent
} from "react"
import type {
  CollectionOrder,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseRenameInput } from "./useRenameInput_types"

function useRenameInput(
  item: CollectionOrder,
  dispatch: Dispatch<MainStateAction>,
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  initialName: RefObject<string>
): UseRenameInput {
  // -------------------- On Change -------------------------

  function onChange(newName: string): void {
    dispatch({
      type: "collection@rename",
      payload: { ...item, name: newName }
    })
  }

  // --------------------------------------------------------
  // ----------------------- On Blur ------------------------

  function onBlur(): void {
    setIsEditing(false)
  }

  // --------------------------------------------------------
  // ----------------- On Keyboard Down ---------------------

  function onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") setIsEditing(false)

    if (e.key === "Escape") {
      setIsEditing(false)
      dispatch({
        type: "collection@rename",
        payload: { ...item, name: initialName.current }
      })
    }
  }

  // --------------------------------------------------------
  // -------------------- On Focus --------------------------

  function onFocus(e: FocusEvent): void {
    ;(e.target as HTMLInputElement).select()
  }

  // --------------------------------------------------------

  return {
    defaultValue: "",
    onChange,
    onBlur,
    onKeyDown,
    onFocus
  }
}

export default useRenameInput
