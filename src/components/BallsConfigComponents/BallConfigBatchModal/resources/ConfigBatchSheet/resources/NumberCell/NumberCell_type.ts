import type { CellSelectOnFocus } from "../../../../../../../hooks/useConfigBatchSheet/resources/useSheetRow/useSheetRow_types"

export interface NumberCellProps extends CellSelectOnFocus {
  value: number
  changeValue: (value: number) => void
  step?: number
  minValue?: number
  maxValue?: number
  decimals?: number
  labelBy?: string
}
