import type { KeyboardEvent } from "react"

export interface UseConfigBatchSheet
  extends SheetSelection,
    SheetArrowNavigation {}

export interface SheetSelection {
  selectionMode: SheetSelectionMode
}

export type SheetSelectionMode = "view" | "edit"

export interface SheetArrowNavigation {
  arrowNavigation: (e: KeyboardEvent) => void
}
