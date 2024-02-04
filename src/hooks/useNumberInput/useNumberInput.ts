import { type RefObject, useEffect, useState } from "react"
import type { UseNumberInput } from "./useNumberInput_types"
import useLabelMove from "./resources/useLabelMove/useLabelMove"

function useNumberInput(
  labelElement: RefObject<HTMLLabelElement>,
  step: number,
  outerValue?: number,
  onChange?: (value: number) => void,
  minValue?: number,
  maxValue?: number
): UseNumberInput {
  const [innerValue, setInnerValue] = useState(outerValue ?? 0)
  const { labelMoveCallback } = useLabelMove(labelElement, setInnerValue, step)

  // Synchronizes the inner and outer values
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
    innerValue,
    onInnerChange,
    labelMoveCallback
  }
}

export default useNumberInput
