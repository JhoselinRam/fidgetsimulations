import type { FocusEvent } from "react"
import type { ConfigBatchRow } from "../../useConfigBatchModal_types"

export interface UseSheetRow extends RowPropState, CellSelectOnFocus {}

export type RowPropState = {
  [k in keyof Omit<ConfigBatchRow, "id">]: k extends "name" | "color"
    ? PropStateHook<string>
    : k extends "deleteBall"
      ? PropStateHook<boolean>
      : PropStateHook<number>
}

export interface PropStateHook<T> {
  value: T
  changeValue: (value: T) => void
}

export interface CellSelectOnFocus {
  selectOnFocus: (e: FocusEvent) => void
}
