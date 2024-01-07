import type { PointerEvent } from "react"
import type { ResizeKnobPosition } from "../../WindowElement_types"

export interface ResizeKnobsProps {
  knobResizeCallback: (event: PointerEvent, role: ResizeKnobPosition) => void
}
