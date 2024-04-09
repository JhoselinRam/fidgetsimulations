import { useCallback, useEffect, useRef, useState } from "react"
import type { UseRenameItem } from "./useRenameItem_types"
import useEditValue from "./resources/useEditValue/useEditValue"

function useRenameItem(
  disabled: boolean,
  outerValue?: string,
  onOuterChange?: (value: string) => void
): UseRenameItem {
  const [innerValue, setInnerValue] = useState(outerValue ?? "")
  const [isEditing, setIsEditing] = useState(false)
  const lastValue = useRef("")
  const editHooks = useEditValue(setInnerValue, setIsEditing, lastValue)
  editHooks.defaultValue = innerValue

  const onInnerChange = useCallback(
    (value: string) => {
      setInnerValue(value)
      if (onOuterChange != null) onOuterChange(value)
    },
    [onOuterChange]
  )

  useEffect(() => {
    if (outerValue == null) return

    const usedValue = disabled ? innerValue : outerValue

    onInnerChange(usedValue)
  }, [outerValue, innerValue, disabled, onInnerChange])

  useEffect(() => {
    onInnerChange(innerValue)
  }, [innerValue, onInnerChange])

  function onPressEdit(): void {
    lastValue.current = innerValue
    setIsEditing(true)
  }

  return {
    onPressEdit,
    innerValue,
    isEditing,
    inputHooks: {
      onChange: setInnerValue,
      ...editHooks
    }
  }
}

export default useRenameItem
