import type { FocusEvent, KeyboardEvent } from "react"

export interface UseRenameInput {
  defaultValue: string
  onBlur: () => void
  onChange: (newName: string) => void
  onKeyDown: (e: KeyboardEvent) => void
  onFocus: (e: FocusEvent) => void
}
