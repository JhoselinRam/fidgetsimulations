import type { ReactNode } from "react"
import type { ToggleButtonProps } from "react-aria-components"

export interface IconToggleProps
  extends Omit<ToggleButtonProps, "children" | "className"> {
  children?: ReactNode
  className?: string
  coloredBy: "fill" | "stroke"
}
