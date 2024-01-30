import type { ReactNode } from "react"
import type { SwitchProps as RASwitchProps } from "react-aria-components"

export interface SwitchProps
  extends Omit<RASwitchProps, "children" | "className"> {
  children?: ReactNode
  className?: string
}
