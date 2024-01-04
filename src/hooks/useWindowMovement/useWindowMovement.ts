import { useState, type MutableRefObject, type PointerEvent } from "react"
import type {
  KnobResizeCallback,
  UseWindowMovement
} from "./useWindowMovement_types"

function useWindowMovement(
  element: MutableRefObject<HTMLDivElement | null>
): UseWindowMovement {
  const [movementEnable, setMovementEnable] = useState(true)

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

  return {
    movementEnable,
    setMovementEnable,
    knobResizeCallback
  }
}

export default useWindowMovement
