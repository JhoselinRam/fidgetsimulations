import type { ConfigBatchRow } from "../../../useConfigBatchModal/useConfigBatchModal_types"
import type { UseCellData } from "../useCellData/useCellData_types"

export interface UseSheetRow extends RowPropState {}

export type RowPropState = {
  [k in keyof Omit<ConfigBatchRow, "id">]: k extends
    | "name"
    | "color"
    | "trajectoryColor"
    ? UseCellData<string>
    : k extends "deleteBall" | "trajectoryMatchColor" | "trajectoryFade"
      ? UseCellData<boolean>
      : UseCellData<number>
}
