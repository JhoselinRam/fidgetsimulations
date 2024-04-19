import {
  type RefObject,
  useRef,
  type PointerEvent as RPointerEvent
} from "react"
import type { GradientOnMoveKnob } from "../useGradientMove/useGradientMove_types"
import { throttlefy } from "../../../../auxiliary/throttlefy"
import type { UseGradientKnobElement } from "./useGradientKnobElement_types"

function useGradientKnobElement(
  index: number,
  onKnobMove: GradientOnMoveKnob,
  knobElement: RefObject<HTMLDivElement>
): UseGradientKnobElement {
  const lastPosition = useRef(0)
  const pointerID = useRef(0)

  function onKnobInputMove(e: RPointerEvent): void {
    lastPosition.current = e.clientX
    pointerID.current = e.pointerId
    knobElement.current?.setPointerCapture(e.pointerId)

    knobElement.current?.addEventListener("pointermove", onPointerMove)
    knobElement.current?.addEventListener("pointerup", onPointerUp)
  }

  const moveKnob = throttlefy(
    (e: PointerEvent) => {
      const mainElement = knobElement.current?.parentNode
      if (mainElement == null) return

      const mainRects = (mainElement as HTMLDivElement).getBoundingClientRect()
      const mainPosition = mainRects.x
      const mainWidth = mainRects.width
      const pointerPosition = e.clientX

      onKnobMove((pointerPosition - mainPosition) / mainWidth, index)
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  function onPointerMove(e: PointerEvent): void {
    moveKnob(e)
  }

  function onPointerUp(): void {
    knobElement.current?.removeEventListener("pointermove", onPointerMove)
    knobElement.current?.releasePointerCapture(pointerID.current)
    knobElement.current?.removeEventListener("pointerup", onPointerUp)
  }

  return {
    onKnobInputMove
  }
}

export default useGradientKnobElement
