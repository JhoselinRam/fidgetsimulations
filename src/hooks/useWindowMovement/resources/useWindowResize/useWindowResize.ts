import {
  type PointerEvent as ReactPointerEvent,
  useRef,
  type RefObject
} from "react"
import type {
  OnMoveWindowResizeHandler,
  UseWindowResize,
  WindowResizeHandler,
  WindowResizeProps,
  WindowSize
} from "./useWindowResize_types"
import type {
  WindowCoords,
  WindowMoveProps
} from "../useWindowMove/useWindowMove_types"
import type { ResizeKnobPosition } from "../../../../components/WindowElement/WindowElement_types"
import { throttlefy } from "../../../../auxiliary/throttlefy"

function useWindowResize(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>,
  windowMove: (newPosition: WindowMoveProps) => void
): UseWindowResize {
  const windowResizeHandler = useRef<WindowResizeHandler | null>(null)
  const firstPointerPosition = useRef<WindowCoords>({ x: 0, y: 0 })
  const firstWindowPosition = useRef<WindowCoords>({ x: 0, y: 0 })
  const firstWindowSize = useRef<WindowSize>({ width: 0, height: 0 })
  const pointerID = useRef<number | null>(null)
  const knobRole = useRef<ResizeKnobPosition>("bottom")
  const throttleTime = 60

  // --------------------------------------------------------
  // ---- On click handler used by ResizeKnob component -----

  function knobResizeCallback(
    event: ReactPointerEvent,
    role: ResizeKnobPosition
  ): void {
    if (pointerID.current != null) return
    if (element.current == null) return
    if (parent.current == null) return

    const knobElement = event.target as HTMLDivElement
    pointerID.current = event.pointerId
    knobRole.current = role
    firstPointerPosition.current = {
      x: event.clientX,
      y: event.clientY
    }

    const elementRect = element.current.getClientRects()[0]
    firstWindowSize.current = {
      width: elementRect.width,
      height: elementRect.height
    }
    firstWindowPosition.current = {
      x: elementRect.x + parent.current.scrollLeft,
      y: elementRect.y + parent.current.scrollTop
    }

    knobElement.setPointerCapture(event.pointerId)
    knobElement.addEventListener("pointermove", handlePointerMove)
    knobElement.addEventListener("pointerup", () => {
      knobElement.removeEventListener("pointermove", handlePointerMove)
      knobElement.releasePointerCapture(event.pointerId)
      pointerID.current = null
    })
  }

  // --------------------------------------------------------
  // -------------- On Pointer Move Handler -----------------

  function handlePointerMove(event: PointerEvent): void {
    onMoveHandler[knobRole.current]({ x: event.x, y: event.y })
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeTopLeft = throttlefy((position: WindowCoords) => {
    console.log("topLeft")
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeTop = throttlefy((position: WindowCoords) => {
    console.log("top")
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeTopRight = throttlefy((position: WindowCoords) => {
    console.log("topRight")
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeLeft = throttlefy((position: WindowCoords) => {
    console.log("left")
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeRight = throttlefy((position: WindowCoords) => {
    windowResize({
      width:
        firstWindowSize.current.width +
        position.x -
        firstPointerPosition.current.x
    })
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeBottomLeft = throttlefy((position: WindowCoords) => {
    console.log("bottomLeft")
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeBottom = throttlefy((position: WindowCoords) => {
    windowResize({
      height:
        firstWindowSize.current.height +
        position.y -
        firstPointerPosition.current.y
    })
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const resizeBottomRight = throttlefy((position: WindowCoords) => {
    console.log("bottomRight")
  }, throttleTime)

  // --------------------------------------------------------
  // --------------------------------------------------------

  const onMoveHandler: OnMoveWindowResizeHandler = {
    "top-left": resizeTopLeft,
    top: resizeTop,
    "top-right": resizeTopRight,
    right: resizeRight,
    left: resizeLeft,
    "bottom-left": resizeBottomLeft,
    bottom: resizeBottom,
    "bottom-right": resizeBottomRight
  }

  // --------------------------------------------------------
  // ---------------- Resize the window ---------------------

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

  // --------------------------------------------------------
  // -------- Set the window "resize event" handler ---------

  function onWindowResize(handler: WindowResizeHandler): void {
    windowResizeHandler.current = handler
  }

  // --------------------------------------------------------

  return {
    knobResizeCallback,
    onWindowResize,
    windowResize
  }
}

export default useWindowResize
