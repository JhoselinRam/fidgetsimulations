import type { FocusEvent } from "react"

export interface UseValueCell<T extends number | string> {
  value: T
  changeValue: (value: T) => void
  onFocus: (e: FocusEvent) => void
}
