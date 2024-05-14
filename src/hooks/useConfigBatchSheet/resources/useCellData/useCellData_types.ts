import type { FocusEvent, KeyboardEvent } from "react"

export interface UseCellData<T> {
  value: T
  onChange: (value: T) => void
  onFocus: (e: FocusEvent) => void
  onBlur: () => void
  onKeyDown: (e: KeyboardEvent) => void
  onPointerDown: () => void
}
