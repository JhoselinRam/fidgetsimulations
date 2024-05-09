import type { CellSelectOnFocus } from "../../../../../../../hooks/useConfigBatchSheet/resources/useSheetRow/useSheetRow_types"

export interface TextCellProps extends CellSelectOnFocus {
  value: string
  changeValue: (value: string) => void
}
