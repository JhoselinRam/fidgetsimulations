import { type PointerEvent } from "react"
import type { ResizeKnobPosition } from "../../../../components/WindowElement/WindowElement_types"
import type { WindowCoords } from "../useWindowMove/useWindowMove_types"

export interface UseWindowResize {
  knobResizeCallback: (event: PointerEvent, role: ResizeKnobPosition) => void
  windowResize: (newSize: WindowResizeProps) => void
  onWindowResize: (handler: WindowResizeHandler) => void
}

export interface WindowResizeProps {
  width?: number
  height?: number
}

export type WindowResizeHandler = (
  oldSize: WindowSize,
  newSize: WindowResizeProps
) => void

export interface WindowSize {
  width: number
  height: number
}

export type OnMoveWindowResizeHandler = {
  [k in ResizeKnobPosition]: (position: WindowCoords) => void
}
