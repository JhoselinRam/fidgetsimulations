import type { ConfigBatchRow } from "../../../useConfigBatchModal/useConfigBatchModal_types"
import type { UseCellData } from "../useCellData/useCellData_types"

export interface UseSheetRow extends RowPropState {}

export type RowPropState = {
  [k in keyof Omit<ConfigBatchRow, "id">]: k extends "name" | "color"
    ? UseCellData<string>
    : k extends "deleteBall"
      ? UseCellData<boolean>
      : UseCellData<number>
}
