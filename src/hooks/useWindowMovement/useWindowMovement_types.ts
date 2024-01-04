import type { Dispatch, PointerEvent, SetStateAction } from "react"
import type { ResizeKnobPosition } from "../../components/WindowElement/WindowElement_types"

export interface UseWindowMovement {
  movementEnable: boolean
  setMovementEnable: Dispatch<SetStateAction<boolean>>
  knobResizeCallback: KnobResizeCallback
}

export type KnobResizeCallback = {
  [k in ResizeKnobPosition]: (event: PointerEvent) => void
}
