import { useState, type RefObject, type PointerEvent, useRef } from "react"
import type {
  KnobResizeCallback,
  WindowCoords,
  UseWindowMovement,
  WindowMoveProps,
  WindowResizeProps,
  WindowResizeHandler,
  WindowMoveHandler
} from "./useWindowMovement_types"

function useWindowMovement(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>
): UseWindowMovement {
  const [movementEnable, setMovementEnable] = useState(true)
  const windowResizeHandler = useRef<WindowResizeHandler | null>(null)
  const windowMoveHandler = useRef<WindowMoveHandler | null>(null)

  function resizeTopLeft(event: PointerEvent): void {
    console.log("top-left")
  }

  function resizeTop(event: PointerEvent): void {
    console.log("top")
  }

  function resizeTopRight(event: PointerEvent): void {
    console.log("top-right")
  }

  function resizeLeft(event: PointerEvent): void {
    console.log("left")
  }

  function resizeRight(event: PointerEvent): void {
    console.log("right")
  }

  function resizeBottomRight(event: PointerEvent): void {
    console.log("bottom-right")
  }

  function resizeBottom(event: PointerEvent): void {
    console.log("bottom")
  }

  function resizeBottomLeft(event: PointerEvent): void {
    console.log("bottom-left")
  }

  const knobResizeCallback: KnobResizeCallback = {
    "top-left": resizeTopLeft,
    top: resizeTop,
    "top-right": resizeTopRight,
    left: resizeLeft,
    right: resizeRight,
    "bottom-left": resizeBottomLeft,
    bottom: resizeBottom,
    "bottom-right": resizeBottomRight
  }

  function windowMove(newPosition: WindowMoveProps): void {
    if (element.current == null) return
    if (newPosition.x == null && newPosition.y == null) return

    const elementRect = element.current.getClientRects()[0]
    const position = screen2mainCoords({
      x: elementRect.x,
      y: elementRect.y,
      ...newPosition
    })

    if (windowMoveHandler.current != null)
      windowMoveHandler.current(
        { x: elementRect.x, y: elementRect.y },
        position
      )

    element.current.style.left = `${position.x}px`
    element.current.style.top = `${position.y}px`
  }

  function windowResize(newSize: WindowResizeProps): void {
    if (element.current == null) return
    if (newSize.width == null && newSize.height == null) return

    const elementRect = element.current.getClientRects()[0]
    const size = {
      width: elementRect.width,
      height: elementRect.height,
      ...newSize
    }

    if (windowResizeHandler.current != null)
      windowResizeHandler.current(
        { width: elementRect.width, height: elementRect.height },
        size
      )

    element.current.style.width = `${size.width}px`
    element.current.style.height = `${size.height}px`
  }

  function onWindowMove(handler: WindowMoveHandler): void {
    windowMoveHandler.current = handler
  }

  function onWindowResize(handler: WindowResizeHandler): void {
    windowResizeHandler.current = handler
  }

  function screen2mainCoords({ x, y }: WindowCoords): WindowCoords {
    if (parent.current == null) return { x: 0, y: 0 }

    const parentRect = parent.current.getClientRects()[0]

    return {
      x: x - parentRect.x,
      y: y - parentRect.y
    }
  }

  return {
    movementEnable,
    setMovementEnable,
    knobResizeCallback,
    windowMove,
    windowResize,
    onWindowMove,
    onWindowResize
  }
}

export default useWindowMovement
