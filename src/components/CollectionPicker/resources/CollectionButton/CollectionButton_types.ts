import type { ReactNode } from "react"

export interface CollectionButtonProps {
  action: () => void
  title: string | string[]
  children: ReactNode
}
