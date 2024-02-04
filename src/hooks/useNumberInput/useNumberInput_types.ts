import type { UseLabelMove } from "./resources/useLabelMove/useLabelMove_types"

export interface UseNumberInput extends UseLabelMove {
  innerValue: number
  onInnerChange: (value: number) => void
}
