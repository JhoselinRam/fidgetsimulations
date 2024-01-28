import type { ReactNode } from "react"

export interface DropSectionProps {
  children: ReactNode
  className?: string
}

export type DropSectionSize = "xs" | "sm" | "md" | "xl"
