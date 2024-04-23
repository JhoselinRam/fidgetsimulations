import type { PointerEvent } from "react"

export interface UseNumberInput {
  innerValue: number
  onInnerChange: (value: number) => void
  labelMoveCallback: (e: PointerEvent) => void
}
