import type { PointerEvent as RPointerEvent } from "react"

export interface UseLabelMove {
  labelMoveCallback: (e: RPointerEvent) => void
}
