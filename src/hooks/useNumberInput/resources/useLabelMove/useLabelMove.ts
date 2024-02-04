import {
  useRef,
  type PointerEvent as RPointerEvent,
  type RefObject,
  type Dispatch,
  type SetStateAction
} from "react"
import type { UseLabelMove } from "./useLabelMove_types"
import { throttlefy } from "../../../../auxiliary/throttlefy"

function useLabelMove(
  labelElement: RefObject<HTMLLabelElement>,
  setInnerValue: Dispatch<SetStateAction<number>>,
  step: number
): UseLabelMove {
  const lastPosition = useRef(0)
  const pointerID = useRef(0)

  // On Pointer Down Callback
  function labelMoveCallback(e: RPointerEvent): void {
    if (labelElement.current == null) return

    lastPosition.current = e.clientX
    pointerID.current = e.pointerId
    labelElement.current.setPointerCapture(e.pointerId)
    labelElement.current.style.cursor = "ew-resize"
    labelElement.current.addEventListener("pointermove", handlePointerMove)
    labelElement.current.addEventListener("pointerup", handlePointerUp)
  }

  // ------------------------------------------
  // ------------ OnPointerMove ---------------

  const labelMove = throttlefy(
    (position: number) => {
      const dx = position - lastPosition.current
      lastPosition.current = position
      setInnerValue((prev) => prev + dx * step)
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  function handlePointerMove(e: PointerEvent): void {
    labelMove(e.clientX)
  }

  // ------------------------------------------
  // ------------ On Pointer Up ---------------

  function handlePointerUp(): void {
    if (labelElement.current == null) return
    labelElement.current.removeEventListener("pointermove", handlePointerMove)
    labelElement.current.releasePointerCapture(pointerID.current)
    labelElement.current.removeEventListener("pointerup", handlePointerUp)
    labelElement.current.style.cursor = "auto"
  }

  // ------------------------------------------

  return {
    labelMoveCallback
  }
}

export default useLabelMove
