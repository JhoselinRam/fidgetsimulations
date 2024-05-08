import type { CellSelectOnFocus } from "../../../../../../../hooks/useConfigBatchModal/resources/useSheetRow/useSheetRow_types"

export interface TextCellProps extends CellSelectOnFocus {
  value: string
  changeValue: (value: string) => void
}
