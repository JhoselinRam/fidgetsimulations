import type { ReactNode } from "react"
import type { TooltipProps } from "react-aria-components"

export interface InfoProps
  extends Omit<TooltipProps, "children" | "className"> {
  children?: ReactNode
  className?: string
  iconClassName?: string
}
