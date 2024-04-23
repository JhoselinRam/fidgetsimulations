import {
  useState,
  type RefObject,
  useCallback,
  useRef,
  type PointerEvent as RPointerEvent,
  useEffect
} from "react"
import type { UseNumberInput } from "./useNumberInput_types"
import { throttlefy } from "../../auxiliary/throttlefy"

function useNumberInput(
  labelElement: RefObject<HTMLLabelElement>,
  step: number,
  isDisabled: boolean,
  outerValue?: number,
  onChange?: (value: number) => void,
  minValue?: number,
  maxValue?: number
): UseNumberInput {
  // ------------------ Declarations ------------------------

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

  // --------------------------------------------------------
  // ----------------- Label Move ---------------------------

  const lastPosition = useRef(0)
  const pointerId = useRef(0)
  const lastValue = useRef(0)

  function labelMoveCallback(e: RPointerEvent): void {
    if (isDisabled) return

    lastPosition.current = e.clientX
    lastValue.current = innerValue
    pointerId.current = e.pointerId

    labelElement.current?.setPointerCapture(e.pointerId)
    labelElement.current?.addEventListener("pointermove", onPointerMove)
    labelElement.current?.addEventListener("pointerup", onPointerUp)
  }

  const labelMove = throttlefy(
    (position: number) => {
      const delta = position - lastPosition.current
      const newInnerValue = lastValue.current + delta * step

      onInnerChange(newInnerValue)
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  function onPointerMove(e: PointerEvent): void {
    labelMove(e.clientX)
  }

  function onPointerUp(): void {
    labelElement.current?.removeEventListener("pointermove", onPointerMove)
    labelElement.current?.removeEventListener("pointerup", onPointerUp)
    labelElement.current?.releasePointerCapture(pointerId.current)
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  useEffect(() => {
    if (outerValue == null) return

    const newOuterValue = isDisabled ? innerValue : outerValue
    onInnerChange(newOuterValue)
  }, [outerValue, onInnerChange, innerValue, isDisabled])

  // --------------------------------------------------------

  return {
    innerValue,
    labelMoveCallback,
    onInnerChange
  }
}

export default useNumberInput
