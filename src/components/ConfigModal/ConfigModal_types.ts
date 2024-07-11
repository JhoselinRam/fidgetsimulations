import type { PropsWithChildren, ReactNode } from "react"

export interface ConfigModalProps extends PropsWithChildren {
  onCancel?: () => void
  onAccept?: () => void
  onClose?: () => void
  isOpen?: boolean
  onOpenChange?: (value: boolean) => void
  triggerElement: ReactNode
  className?: string
  isKeyboardDismissDisabled?: boolean
}
