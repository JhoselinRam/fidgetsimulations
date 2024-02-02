import { useEffect, useState } from "react"
import type { UseNumberInput } from "./useNumberInput_types"

function useNumberInput(
  outerValue?: number,
  onChange?: (value: number) => void
): UseNumberInput {
  const [innerValue, setInnerValue] = useState(outerValue ?? 0)

  useEffect(() => {
    if (outerValue == null) return
    setInnerValue(outerValue)
  }, [outerValue])

  useEffect(() => {
    if (onChange == null) return
    onChange(innerValue)
  }, [innerValue, onChange])

  function onInnerChange(value: number): void {
    setInnerValue(value)
    if (onChange != null) onChange(value)
  }

  return {
    setInnerValue,
    innerValue,
    onInnerChange
  }
}

export default useNumberInput
