import type { NumericControlRangeHooks } from "../../../../../hooks/useBallAddBatch/resources/useNumericControl/useNumericControl_types"
import type { AddBatchNumericSectionProps } from "../AddBatchNumericControl/AddBatchNumericControl_types"

export interface AddBatchRangeControlProps
  extends AddBatchNumericSectionProps,
    NumericControlRangeHooks {
  type: "linear" | "random"
  isModeSelected: boolean
}
