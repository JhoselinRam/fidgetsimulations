import type { ReactNode } from "react"

export interface WindowElementProps {
  children: ReactNode
}

export type ResizeKnobPosition =
  | "top-left"
  | "top"
  | "top-right"
  | "left"
  | "right"
  | "bottom-left"
  | "bottom"
  | "bottom-right"

export type ResizeKnobClass = {
  [k in ResizeKnobPosition]: string
}
