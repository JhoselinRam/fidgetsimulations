import {
  type PointerEvent as ReactPointerEvent,
  useRef,
  type RefObject
} from "react"
import type {
  UseWindowMove,
  WindowCoords,
  WindowMoveHandler,
  WindowMoveProps
} from "./useWindowMove_types"
import { screen2mainCoords } from "../../../../auxiliary/screen2mainCoords"
import { throttlefy } from "../../../../auxiliary/throttlefy"

function useWindowMove(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>
): UseWindowMove {
  const windowMoveHandler = useRef<WindowMoveHandler | null>(null)
  const pointerID = useRef<number | null>(null)
  const firstCursorPosition = useRef<WindowCoords>({ x: 0, y: 0 })
  const firstWindowPosition = useRef<WindowCoords>({ x: 0, y: 0 })
  const throttleTime = 60

  // ----- On click handler used by MoveLayer component -----

  function moveLayerCallback(event: ReactPointerEvent): void {
    if (element.current == null) return
    if (parent.current == null) return
    if (pointerID.current != null) return

    const layerElement = event.target as HTMLDivElement
    pointerID.current = event.pointerId

    firstCursorPosition.current = {
      x: event.clientX + parent.current.scrollLeft,
      y: event.clientY + parent.current.scrollTop
    }

    const elementRect = element.current.getClientRects()[0]
    firstWindowPosition.current = screen2mainCoords(
      {
        x: elementRect.x + parent.current.scrollLeft,
        y: elementRect.y + parent.current.scrollTop
      },
      parent
    )

    layerElement.setPointerCapture(event.pointerId)

    layerElement.style.cursor = "grabbing"
    layerElement.addEventListener("pointermove", handlePointerMove)
    layerElement.addEventListener("pointerup", () => {
      layerElement.style.cursor = "grab"
      layerElement.removeEventListener("pointermove", handlePointerMove)
      pointerID.current = null
      layerElement.releasePointerCapture(event.pointerId)
    })
  }

  // --------------------------------------------------------
  // -------------- On Pointer Move handler -----------------

  function handlePointerMove(event: PointerEvent): void {
    throttleMove({ x: event.x, y: event.y })
  }

  // --------------------------------------------------------
  // --------- Move the window to mimic the pointer ---------

  const throttleMove = throttlefy((coords: WindowCoords) => {
    if (element.current == null) return
    if (parent.current == null) return

    const displacement = {
      x: coords.x - firstCursorPosition.current.x + parent.current.scrollLeft,
      y: coords.y - firstCursorPosition.current.y + parent.current.scrollTop
    }

    let newX = firstWindowPosition.current.x + displacement.x
    let newY = firstWindowPosition.current.y + displacement.y

    newX = newX < 0 ? 0 : newX
    newY = newY < 0 ? 0 : newY

    element.current.style.left = `${newX}px`
    element.current.style.top = `${newY}px`
  }, throttleTime)

  // --------------------------------------------------------
  // -------- Moves the window to a new position ------------

  function windowMove(newPosition: WindowMoveProps): void {
    if (element.current == null) return
    if (newPosition.x == null && newPosition.y == null) return

    // Gets the new window position
    const elementRect = element.current.getClientRects()[0]
    let position = screen2mainCoords(
      {
        x: elementRect.x,
        y: elementRect.y
      },
      parent
    )
    position = { ...position, ...newPosition }

    // Runs the handler after the new position is computed but before the changes are applied
    if (windowMoveHandler.current != null)
      windowMoveHandler.current(
        { x: elementRect.x, y: elementRect.y },
        position
      )

    // Set the window to the new position
    element.current.style.left = `${position.x}px`
    element.current.style.top = `${position.y}px`
  }

  // --------------------------------------------------------
  // ------- Set the window "move event" handler ------------

  function onWindowMove(handler: WindowMoveHandler): void {
    windowMoveHandler.current = handler
  }
  // --------------------------------------------------------

  return {
    moveLayerCallback,
    onWindowMove,
    windowMove
  }
}

export default useWindowMove
