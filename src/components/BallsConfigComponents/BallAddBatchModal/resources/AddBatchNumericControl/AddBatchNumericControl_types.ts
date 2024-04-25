import type { ReactNode } from "react"
import type { UseNumericControl } from "../../../../../hooks/useBallAddBatch/resources/useNumericControl/useNumericControl_types"

export interface AddBatchNumericControlProps
  extends AddBatchNumericSectionProps {
  title: string
  hooks: UseNumericControl
}

export interface AddBatchNumericSectionProps {
  unit?: ReactNode
  step?: number
  decimals?: number
  minValue?: number
}
