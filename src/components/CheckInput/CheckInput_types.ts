import type { ReactNode } from "react"
import type { CheckboxProps } from "react-aria-components"

export interface CheckInputProps
  extends Omit<CheckboxProps, "className" | "children"> {
  className?: string
  type?: CheckType
  children?: ReactNode
}

export type CheckType = "accent" | "danger"

export type CheckColorByType = {
  [k in CheckType]: string
}
