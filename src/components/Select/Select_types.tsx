import type { ReactNode } from "react"
import type { SelectProps as RASelectProps } from "react-aria-components"

export interface SelectProps
  extends Omit<RASelectProps<SelectItemType>, "children" | "className"> {
  label?: string
  children?: ReactNode | ((item: SelectItemType) => ReactNode)
  items?: Iterable<SelectItemType>
  className?: string
  selectorClassName?: string
  labelClassName?: string
  matchSize?: boolean
}

export interface SelectItemType {
  id: string
  name: string
}
