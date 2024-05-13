import type { KeyboardEvent } from "react"

export interface UseConfigBatchSheet
  extends SheetArrowNavigation,
    SheetCellSelection {}

export interface SheetSelection {
  selectionMode: SheetSelectionMode
}

export type SheetSelectionMode = "view" | "edit"

export interface SheetArrowNavigation {
  arrowNavigation: (e: KeyboardEvent) => void
}

export interface SheetCellSelection {
  setSelectedCell: SheetCellSelectionCallback
  setSelectionMode: SheetSelectionModeCallback
  blurCell: () => void
}

export type SheetCellSelectionCallback = (row: number, column: number) => void

export type SheetSelectionModeCallback = (mode: SheetSelectionMode) => void
