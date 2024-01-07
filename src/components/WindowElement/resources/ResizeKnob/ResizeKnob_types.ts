import type { PointerEvent } from "react"
import type { ResizeKnobPosition } from "../../WindowElement_types"

export interface ResizeKnobProps {
  position: ResizeKnobPosition
  resizeCallback: (event: PointerEvent, role: ResizeKnobPosition) => void
}
