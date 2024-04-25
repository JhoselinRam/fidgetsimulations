import type { NumericControlFixedHooks } from "../../../../../hooks/useBallAddBatch/resources/useNumericControl/useNumericControl_types"
import type { AddBatchNumericSectionProps } from "../AddBatchNumericControl/AddBatchNumericControl_types"

export interface AddBatchFixedControlProps
  extends AddBatchNumericSectionProps,
    NumericControlFixedHooks {
  label: string
  isModeSelected: boolean
}
