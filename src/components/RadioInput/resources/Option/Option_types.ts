import type { ReactNode } from "react"
import type { RadioProps } from "react-aria-components"

export interface OptionProps
  extends Omit<RadioProps, "children" | "className"> {
  children: ReactNode
  className?: string
}
