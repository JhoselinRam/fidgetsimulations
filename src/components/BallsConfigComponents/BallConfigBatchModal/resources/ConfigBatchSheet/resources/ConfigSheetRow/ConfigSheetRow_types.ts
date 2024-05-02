import type {
  ConfigBatchRow,
  SheetChangeCallback
} from "../../../../../../../hooks/useConfigBatchSheet/useConfigBatchSheet_types"

export interface ConfigSheetRowProps {
  data: ConfigBatchRow
  index: number
  changeSheetState: SheetChangeCallback
}
