import type { ReactNode } from "react"
import type { ListBoxItemProps } from "react-aria-components"

export interface ItemProps
  extends Omit<ListBoxItemProps, "children" | "className" | "id"> {
  children?: ReactNode
  className?: string
  id?: string
}
