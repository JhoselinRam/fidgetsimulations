import type {
  AddBatchNumericRangeProps,
  AddBatchNumericSectionProps
} from "../AddBatchNumericControl/AddBatchNumericControl_types"

export interface AddBatchRangeControlProps
  extends AddBatchNumericSectionProps,
    AddBatchNumericRangeProps {
  type: "linear" | "random"
}
