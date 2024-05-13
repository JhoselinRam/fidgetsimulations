import type { ReactNode } from "react"
import type { ToggleButtonProps } from "react-aria-components"

export interface CheckInputProps
  extends Omit<ToggleButtonProps, "className" | "children" | "type"> {
  className?: string
  type?: CheckType
  children?: ReactNode
  size?: CheckSize
}

export type CheckType = "accent" | "danger"

export type CheckSize = "regular" | "sm" | "lg" | "xs"

export type CheckColorByType = {
  [k in CheckType]: string
}

export type CheckSizePicker = {
  [k in CheckSize]: string
}
