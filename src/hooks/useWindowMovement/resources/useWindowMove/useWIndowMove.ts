import { type PointerEvent, useRef, type RefObject } from "react"
import type {
  UseWindowMove,
  WindowMoveHandler,
  WindowMoveProps
} from "./useWindowMove_types"
import { screen2mainCoords } from "../Coordinates/coordinates"

function useWindowMove(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>
): UseWindowMove {
  const windowMoveHandler = useRef<WindowMoveHandler | null>(null)

  function moveLayerCallback(event: PointerEvent): void {
    console.dir(event)
  }

  function windowMove(newPosition: WindowMoveProps): void {
    if (element.current == null) return
    if (newPosition.x == null && newPosition.y == null) return

    const elementRect = element.current.getClientRects()[0]
    let position = screen2mainCoords(
      {
        x: elementRect.x,
        y: elementRect.y
      },
      parent
    )
    position = { ...position, ...newPosition }

    if (windowMoveHandler.current != null)
      windowMoveHandler.current(
        { x: elementRect.x, y: elementRect.y },
        position
      )

    element.current.style.left = `${position.x}px`
    element.current.style.top = `${position.y}px`
  }

  function onWindowMove(handler: WindowMoveHandler): void {
    windowMoveHandler.current = handler
  }

  return {
    moveLayerCallback,
    onWindowMove,
    windowMove
  }
}

export default useWindowMove
