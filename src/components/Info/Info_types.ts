import type { ReactNode } from "react"
import type { PopoverProps } from "react-aria-components"

export interface InfoProps
  extends Omit<PopoverProps, "children" | "className"> {
  children?: ReactNode
  className?: string
  iconClassName?: string
}
