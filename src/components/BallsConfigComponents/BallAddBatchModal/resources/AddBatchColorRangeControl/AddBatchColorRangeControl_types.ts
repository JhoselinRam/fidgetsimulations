import type { ColorControlRangeHooks } from "../../../../../hooks/useBallAddBatch/resources/useColorControl/useColorControl_types"

export interface AddBatchColorRangeControlProps extends ColorControlRangeHooks {
  type: "linear" | "random"
  isModeSelected: boolean
}
