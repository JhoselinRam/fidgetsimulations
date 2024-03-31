import type { ReactNode } from "react"
import type { RadioGroupProps } from "react-aria-components"

export interface RadioInputProps
  extends Omit<RadioGroupProps, "children" | "className"> {
  children: ReactNode
  className?: string
  label?: string
  optionOrientation?: "vertical" | "horizontal"
  labelClassName?: string
}
