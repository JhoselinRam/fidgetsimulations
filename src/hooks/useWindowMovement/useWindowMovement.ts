import { useState, type RefObject } from "react"
import type { UseWindowMovement } from "./useWindowMovement_types"
import useWindowResize from "./resources/useWindowResize/useWindowResize"
import useWindowMove from "./resources/useWindowMove/useWIndowMove"

function useWindowMovement(
  element: RefObject<HTMLDivElement>,
  parent: RefObject<HTMLDivElement>
): UseWindowMovement {
  const [movementEnable, setMovementEnable] = useState(true)

  const { moveLayerCallback, onWindowMove, windowMove } = useWindowMove(
    element,
    parent
  )

  const { knobResizeCallback, onWindowResize, windowResize } = useWindowResize(
    element,
    parent,
    windowMove
  )

  return {
    movementEnable,
    setMovementEnable,
    knobResizeCallback,
    windowMove,
    windowResize,
    onWindowMove,
    onWindowResize,
    moveLayerCallback
  }
}

export default useWindowMovement
