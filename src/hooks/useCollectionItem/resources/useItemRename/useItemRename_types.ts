import type { KeyboardEvent } from "react"

export interface UseItemRename {
  itemRenameProps: ItemRenameProps
}

export interface ItemRenameProps {
  onChange: (newName: string) => void
  onBlur: () => void
  value: string
  onKeyDown: (e: KeyboardEvent) => void
}
