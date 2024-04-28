import type { PropsWithChildren, ReactNode } from "react"

export interface ConfigModalProps extends PropsWithChildren {
  onCancel?: () => void
  onAccept?: () => void
  triggerElement: ReactNode
  className?: string
}
