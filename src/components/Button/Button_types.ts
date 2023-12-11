import type { MouseEvent, ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode
  onClick: (e?: MouseEvent) => void
  className?: string
}
