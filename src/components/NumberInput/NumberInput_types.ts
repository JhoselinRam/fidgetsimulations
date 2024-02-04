import type { ReactNode } from "react"
import type { NumberFieldProps } from "react-aria-components"

export interface NumberInputProps
  extends Omit<
    NumberFieldProps,
    "children" | "className" | "value" | "defaultValue" | "onChange" | "step"
  > {
  children?: ReactNode
  className?: string
  unit?: string
  inputClassName?: string
  value?: number
  onChange?: (value: number) => void
  step?: number
}
