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
  const validValue = useCallback(
    (value: number): number => {
      if (minValue != null && value < minValue) return minValue
      if (maxValue != null && value > maxValue) return maxValue

      return value
    },
    [minValue, maxValue]
  )
  const onInnerChange = useCallback(
    (value: number): void => {
      const newValue = validValue(value)
      setInnerValue(newValue)
      if (onChange != null) onChange(newValue)
    },
    [onChange, validValue]
  )

  const { labelMoveCallback } = useLabelMove(
    labelElement,
    setInnerValue,
    step,
    isDisabled
  )

  // Synchronizes the inner and outer values
  useEffect(() => {
    if (outerValue == null) return

    const newOuterValue = isDisabled ? innerValue : outerValue
    onInnerChange(newOuterValue)
  }, [outerValue, onInnerChange, innerValue, isDisabled])

  useEffect(() => {
    onInnerChange(innerValue)
  }, [innerValue, onInnerChange])

  return {
    innerValue,
    onInnerChange,
    labelMoveCallback
  }
}

export default useNumberInput
