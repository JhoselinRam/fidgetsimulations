import type { ReactNode } from "react"

export interface AddBatchNumericControlProps
  extends AddBatchNumericSectionProps {
  title: string
}

export interface AddBatchNumericSectionProps {
  unit?: ReactNode
  step?: number
  decimals?: number
}

export interface AddBatchNumericRangeProps {
  test?: boolean
}
