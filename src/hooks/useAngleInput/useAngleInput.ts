import { type RefObject, useState } from "react"
import type { UseAngleInput } from "./useAngleInput_types"
import useAngleDrag from "./resources/useAngleDrag/useAngleDrag"

function useAngleInput(
  inputElement: RefObject<HTMLDivElement>,
  value?: number,
  onChange?: (value: number) => void
): UseAngleInput {
  const [angle, setAngle] = useState(value ?? 0)
  useAngleDrag(inputElement, setAngle)

  return {
    angle
  }
}

export default useAngleInput
