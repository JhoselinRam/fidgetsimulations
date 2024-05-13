import type { UseCellData } from "../../../../../../../hooks/useConfigBatchSheet/resources/useCellData/useCellData_types"

export interface NumberCellProps extends UseCellData<number> {
  step?: number
  minValue?: number
  maxValue?: number
  decimals?: number
  labelBy?: string
}
