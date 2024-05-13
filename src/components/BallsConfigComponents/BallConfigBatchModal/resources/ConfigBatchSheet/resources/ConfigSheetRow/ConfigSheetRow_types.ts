import type { ConfigBatchRow } from "../../../../../../../hooks/useConfigBatchModal/useConfigBatchModal_types"
import type { SheetCellSelection } from "../../../../../../../hooks/useConfigBatchSheet/useConfigBatchSheet_types"

export interface ConfigSheetRowProps extends SheetCellSelection {
  data: ConfigBatchRow
  index: number
}
