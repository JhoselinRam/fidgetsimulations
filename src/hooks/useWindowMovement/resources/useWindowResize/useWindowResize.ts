import {
  type PointerEvent as ReactPointerEvent,
  useRef,
  type RefObject,
  useContext
} from "react"
import type {
  CursorByRole,
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
import { screen2mainCoords } from "../../../../auxiliary/screen2mainCoords"
import type { GraphicElementType } from "../../../useMainState/resources/GraphicElement/GraphicElement_types"
import {
  getGraphicalCollection,
  mainStateContext
} from "../../../useMainState/useMainState"

function useWindowResize(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>,
  id: string,
  type: GraphicElementType,
  windowMove: (newPosition: WindowMoveProps) => void
): UseWindowResize {
  const windowResizeHandler = useRef<WindowResizeHandler | null>(null)
  const firstPointerPosition = useRef<WindowCoords>({ x: 0, y: 0 })
  const firstWindowPosition = useRef<WindowCoords>({ x: 0, y: 0 })
  const firstWindowSize = useRef<WindowSize>({ width: 0, height: 0 })
  const pointerID = useRef<number | null>(null)
  const knobRole = useRef<ResizeKnobPosition>("bottom")
  const { dispatch, mainState } = useContext(mainStateContext)
  const cursor: CursorByRole = {
    "top-left": "nwse-resize",
    top: "ns-resize",
    "top-right": "nesw-resize",
    left: "ew-resize",
    right: "ew-resize",
    "bottom-left": "nesw-resize",
    bottom: "ns-resize",
    "bottom-right": "nwse-resize"
  }
  const collection = getGraphicalCollection({ id, type }, mainState)
  const lockRatio = collection == null ? false : collection.lockRatio

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
    firstWindowPosition.current = screen2mainCoords(
      {
        x: elementRect.x + parent.current.scrollLeft,
        y: elementRect.y + parent.current.scrollTop
      },
      parent
    )

    knobElement.setPointerCapture(event.pointerId)
    knobElement.style.cursor = cursor[role]
    knobElement.addEventListener("pointermove", handlePointerMove)

    knobElement.addEventListener("pointerup", () => {
      knobElement.removeEventListener("pointermove", handlePointerMove)
      knobElement.releasePointerCapture(event.pointerId)
      pointerID.current = null
      knobElement.style.cursor = "none"
    })
  }

  // --------------------------------------------------------
  // -------------- On Pointer Move Handler -----------------

  function handlePointerMove(event: PointerEvent): void {
    onMoveHandler[knobRole.current]({ x: event.x, y: event.y }, event.shiftKey)
  }

  // --------------------------------------------------------
  // -------------------- Top Left --------------------------

  const resizeTopLeft = throttlefy(
    (position: WindowCoords, shiftKey: boolean) => {
      const displacement = getDisplacement(position, shiftKey)

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.height / firstWindowSize.current.width
        displacement.y = displacement.x * ratio
      }

      windowResize({
        width: firstWindowSize.current.width - displacement.x,
        height: firstWindowSize.current.height - displacement.y
      })

      windowMove({
        x: firstWindowPosition.current.x + displacement.x,
        y: firstWindowPosition.current.y + displacement.y
      })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ---------------------- Top -----------------------------

  const resizeTop = throttlefy(
    (position: WindowCoords) => {
      const displacement = getDisplacement(position)
      let width = firstWindowSize.current.width

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.width / firstWindowSize.current.height
        displacement.x = displacement.y * ratio
        width -= displacement.x
      }

      windowMove({ y: firstWindowPosition.current.y + displacement.y })

      windowResize({
        width,
        height: firstWindowSize.current.height - displacement.y
      })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ------------------- Top Right --------------------------

  const resizeTopRight = throttlefy(
    (position: WindowCoords, shiftKey: boolean) => {
      const displacement = getDisplacement(position, shiftKey, true)

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.height / firstWindowSize.current.width
        displacement.y = -displacement.x * ratio
      }

      windowResize({
        width: firstWindowSize.current.width + displacement.x,
        height: firstWindowSize.current.height - displacement.y
      })

      windowMove({ y: firstWindowPosition.current.y + displacement.y })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ---------------------- Left ----------------------------

  const resizeLeft = throttlefy(
    (position: WindowCoords) => {
      const displacement = getDisplacement(position)
      let y = firstWindowPosition.current.y
      let height = firstWindowSize.current.height

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.height / firstWindowSize.current.width
        displacement.y = displacement.x * ratio
        y += displacement.y
        height -= displacement.y
      }

      windowMove({ x: firstWindowPosition.current.x + displacement.x, y })

      windowResize({
        width: firstWindowSize.current.width - displacement.x,
        height
      })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ---------------------- Right ---------------------------

  const resizeRight = throttlefy(
    (position: WindowCoords) => {
      const displacement = getDisplacement(position)
      let y = firstWindowPosition.current.y
      let height = firstWindowSize.current.height

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.height / firstWindowSize.current.width
        displacement.y = displacement.x * ratio
        y -= displacement.y
        height += displacement.y
      }

      windowMove({ y })

      windowResize({
        width: firstWindowSize.current.width + displacement.x,
        height
      })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ------------------- Bottom Left ------------------------

  const resizeBottomLeft = throttlefy(
    (position: WindowCoords, shiftKey: boolean) => {
      const displacement = getDisplacement(position, shiftKey, true)

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.height / firstWindowSize.current.width
        displacement.y = -displacement.x * ratio
      }

      windowResize({
        width: firstWindowSize.current.width - displacement.x,
        height: firstWindowSize.current.height + displacement.y
      })

      windowMove({ x: firstWindowPosition.current.x + displacement.x })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // --------------------- Bottom ---------------------------

  const resizeBottom = throttlefy(
    (position: WindowCoords) => {
      const displacement = getDisplacement(position)
      let width = firstWindowSize.current.width

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.width / firstWindowSize.current.height
        displacement.x = displacement.y * ratio
        width += displacement.x
      }

      windowResize({
        height: firstWindowSize.current.height + displacement.y,
        width
      })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ------------------- Bottom Right -----------------------

  const resizeBottomRight = throttlefy(
    (position: WindowCoords, shiftKey: boolean) => {
      const displacement = getDisplacement(position, shiftKey)

      if (lockRatio) {
        const ratio =
          firstWindowSize.current.height / firstWindowSize.current.width
        displacement.y = displacement.x * ratio
      }

      windowResize({
        width: firstWindowSize.current.width + displacement.x,
        height: firstWindowSize.current.height + displacement.y
      })
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  // --------------------------------------------------------
  // ------------- Resize Handlers Object -------------------

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

    dispatch({
      type: "graphic@width",
      payload: {
        type,
        id,
        width: size.width
      }
    })
    dispatch({
      type: "graphic@height",
      payload: {
        type,
        id,
        height: size.height
      }
    })
  }

  // --------------------------------------------------------
  // -------- Set the window "resize event" handler ---------

  function onWindowResize(handler: WindowResizeHandler): void {
    windowResizeHandler.current = handler
  }

  // --------------------------------------------------------
  // Get the difference between new and old pointer positions

  function getDisplacement(
    position: WindowCoords,
    shiftKey = false,
    reverse = false
  ): WindowCoords {
    const displacement = {
      x: position.x - firstPointerPosition.current.x,
      y: position.y - firstPointerPosition.current.y
    }

    if (shiftKey) displacement.y = reverse ? -displacement.x : displacement.x

    return displacement
  }

  // --------------------------------------------------------

  return {
    knobResizeCallback,
    onWindowResize,
    windowResize
  }
}

export default useWindowResize
