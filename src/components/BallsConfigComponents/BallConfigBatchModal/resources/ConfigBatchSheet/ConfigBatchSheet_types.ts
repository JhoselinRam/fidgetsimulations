import type { ConfigBatchRow } from "../../../../../hooks/useConfigBatchModal/useConfigBatchModal_types"

export interface ConfigBatchSheetProps {
  rows: ConfigBatchRow[]
}

export type ConfigSheetData = ConfigBatchRow[]

export interface ConfigSheetRef {
  getSheetData: () => ConfigSheetData
}
