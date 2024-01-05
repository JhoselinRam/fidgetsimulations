import { type PointerEvent } from "react"
import type { ResizeKnobPosition } from "../../../../components/WindowElement/WindowElement_types"

export interface UseWindowResize {
  knobResizeCallback: KnobResizeCallback
  windowResize: (newSize: WindowResizeProps) => void
  onWindowResize: (handler: WindowResizeHandler) => void
}

export type KnobResizeCallback = {
  [k in ResizeKnobPosition]: (event: PointerEvent) => void
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
