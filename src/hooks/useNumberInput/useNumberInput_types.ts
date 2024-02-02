import type { Dispatch, SetStateAction } from "react"

export interface UseNumberInput {
  innerValue: number
  onInnerChange: (value: number) => void
  setInnerValue: Dispatch<SetStateAction<number>>
}
