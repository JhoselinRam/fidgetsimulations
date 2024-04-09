import type { FocusEvent, KeyboardEvent } from "react"

export interface UseEditValue {
  defaultValue: string
  onBlur: () => void
  onKeyDown: (e: KeyboardEvent) => void
  onFocus: (e: FocusEvent) => void
}
