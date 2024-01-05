import { type PointerEvent, useRef, type RefObject } from "react"
import type {
  KnobResizeCallback,
  UseWindowResize,
  WindowResizeHandler,
  WindowResizeProps
} from "./useWindowResize_types"

function useWindowResize(element: RefObject<HTMLDivElement>): UseWindowResize {
  const windowResizeHandler = useRef<WindowResizeHandler | null>(null)

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

  function onWindowResize(handler: WindowResizeHandler): void {
    windowResizeHandler.current = handler
  }

  return {
    knobResizeCallback,
    onWindowResize,
    windowResize
  }
}

export default useWindowResize
