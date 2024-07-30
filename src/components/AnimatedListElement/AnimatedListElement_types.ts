import type { PropsWithChildren } from "react"

export interface AnimatedListElementProps extends PropsWithChildren {
  shouldExit: boolean
  onExit?: () => void
  enterDirection?: AnimatedListDirection
  exitDirection?: AnimatedListDirection
  className?: string
  containerClassName?: string
}

export type AnimatedListDirection = "left" | "right" | "top" | "bottom"

export type AnimatedListInitialPosition = {
  [k in AnimatedListDirection]: string
}
