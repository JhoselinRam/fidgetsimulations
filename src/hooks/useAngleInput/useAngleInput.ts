import { type RefObject, useState, useEffect, useCallback } from "react"
import type { UseAngleInput } from "./useAngleInput_types"
import useAngleDrag from "./resources/useAngleDrag/useAngleDrag"
import { toRounded } from "../../auxiliary/toRounded"

function useAngleInput(
  inputElement: RefObject<HTMLDivElement>,
  disabled: boolean,
  value?: number,
  onChange?: (value: number) => void
): UseAngleInput {
  const [angle, setAngle] = useState(value ?? 0)
  useAngleDrag(inputElement, setAngle)

  const onInnerChange = useCallback(
    (value: number): void => {
      setAngle(value)
      if (onChange != null) onChange(value)
    },
    [onChange]
  )

  useEffect(() => {
    if (value == null) return

    const usedValue = disabled
      ? angle
      : toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)

    onInnerChange(usedValue)
  }, [value, angle, disabled, onInnerChange])

  useEffect(() => {
    const usedValue = toRounded(angle, import.meta.env.VITE_ROUNDED_DECIMALS)
    onInnerChange(usedValue)
  }, [angle, onInnerChange])

  return {
    angle
  }
}

export default useAngleInput
