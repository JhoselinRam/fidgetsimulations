import type { KeyboardEvent } from "react"
import type { ConfigSheetRowRef } from "../../components/BallsConfigComponents/BallConfigBatchModal/resources/ConfigBatchSheet/resources/ConfigSheetRow/ConfigSheetRow_types"

export interface UseConfigBatchSheet
  extends SheetArrowNavigation,
    SheetCellSelection,
    DeleteAllHooks {
  getRowDataRef: (data: ConfigSheetRowRef) => void
}

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
  onEnter: SheetOnEnterCallback
  setLastSelectedColumn: (column: number) => void
}

export type SheetCellSelectionCallback = (row: number, column: number) => void

export type SheetSelectionModeCallback = (mode: SheetSelectionMode) => void

export type SheetOnEnterCallback = (shiftKey: boolean) => void

export interface DeleteAllHooks {
  deleteAllValue: boolean
  onDeleteAll: (value: boolean) => void
}
