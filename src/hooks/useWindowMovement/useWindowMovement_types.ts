import type { Dispatch, PointerEvent, SetStateAction } from "react"
import type { ResizeKnobPosition } from "../../components/WindowElement/WindowElement_types"

export interface UseWindowMovement {
  movementEnable: boolean
  setMovementEnable: Dispatch<SetStateAction<boolean>>
  knobResizeCallback: KnobResizeCallback
  windowMove: (newPosition: WindowMoveProps) => void
  windowResize: (newSize: WindowResizeProps) => void
  onWindowMove: (handler: WindowMoveHandler) => void
  onWindowResize: (handler: WindowResizeHandler) => void
}

export type KnobResizeCallback = {
  [k in ResizeKnobPosition]: (event: PointerEvent) => void
}

export interface WindowMoveProps {
  x?: number
  y?: number
}

export interface WindowResizeProps {
  width?: number
  height?: number
}

export interface WindowCoords {
  x: number
  y: number
}

export interface WindowSize {
  width: number
  height: number
}

export type WindowMoveHandler = (
  oldCoords: WindowCoords,
  newCoords: WindowCoords
) => void

export type WindowResizeHandler = (
  oldSize: WindowSize,
  newSize: WindowResizeProps
) => void
