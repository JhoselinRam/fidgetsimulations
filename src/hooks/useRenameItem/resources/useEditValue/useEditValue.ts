import type {
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  RefObject,
  SetStateAction
} from "react"
import type { UseEditValue } from "./useEditValue_types"

function useEditValue(
  setInnerValue: Dispatch<SetStateAction<string>>,
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  lastValue: RefObject<string>
): UseEditValue {
  function onBlur(): void {
    setIsEditing(false)
  }

  function onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") setIsEditing(false)

    if (e.key === "Escape") {
      setIsEditing(false)
      setInnerValue(lastValue.current ?? "")
    }
  }

  function onFocus(e: FocusEvent): void {
    ;(e.target as HTMLInputElement).select()
  }

  return {
    onKeyDown,
    onBlur,
    onFocus,
    defaultValue: ""
  }
}

export default useEditValue
