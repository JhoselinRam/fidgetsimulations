import { type RefObject, useEffect, useState, useCallback } from "react"
import type { UseNumberInput } from "./useNumberInput_types"
import useLabelMove from "./resources/useLabelMove/useLabelMove"

function useNumberInput(
  labelElement: RefObject<HTMLLabelElement>,
  step: number,
  isDisabled: boolean,
  outerValue?: number,
  onChange?: (value: number) => void,
  minValue?: number,
  maxValue?: number
): UseNumberInput {
  const [innerValue, setInnerValue] = useState(outerValue ?? 0)
  const onInnerChange = useCallback(
    (value: number): void => {
      setInnerValue(value)
      if (onChange != null) onChange(value)
    },
    [onChange]
  )
  const { labelMoveCallback } = useLabelMove(
    labelElement,
    setInnerValue,
    step,
    isDisabled
  )

  const validValue = useCallback(
    (value: number): number => {
      if (minValue != null && value < minValue) return minValue
      if (maxValue != null && value > maxValue) return maxValue

      return value
    },
    [minValue, maxValue]
  )

  // Synchronizes the inner and outer values
  useEffect(() => {
    if (outerValue == null) return

    const newOuterValue = isDisabled
      ? validValue(innerValue)
      : validValue(outerValue)
    onInnerChange(newOuterValue)
  }, [outerValue, onInnerChange, validValue, innerValue, isDisabled])

  useEffect(() => {
    const newInnerValue = validValue(innerValue)

    onInnerChange(newInnerValue)
  }, [innerValue, onInnerChange, validValue])

  return {
    innerValue,
    onInnerChange,
    labelMoveCallback
  }
}

export default useNumberInput
