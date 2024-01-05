import { type PointerEvent } from "react"

export interface UseWindowMove {
  moveLayerCallback: (event: PointerEvent) => void
  windowMove: (newPosition: WindowMoveProps) => void
  onWindowMove: (handler: WindowMoveHandler) => void
}

export interface WindowMoveProps {
  x?: number
  y?: number
}

export interface WindowCoords {
  x: number
  y: number
}

export type WindowMoveHandler = (
  oldCoords: WindowCoords,
  newCoords: WindowCoords
) => void
