import type {
  ConfigBatchRow,
  SheetPropTypeByName
} from "../../useConfigBatchSheet_types"

export interface UseSheetRow extends RowPropState {}

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

export type SheetPropHooks = {
  [k in keyof RowPropState]: (value: SheetPropTypeByName<k>) => void
}
