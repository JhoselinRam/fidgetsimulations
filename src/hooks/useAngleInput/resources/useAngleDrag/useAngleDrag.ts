import {
  useEffect,
  type Dispatch,
  type RefObject,
  type SetStateAction
} from "react"
import { throttlefy } from "../../../../auxiliary/throttlefy"
import type { PointerCoord } from "./useAngleDrag_types"

function useAngleDrag(
  inputElement: RefObject<HTMLDivElement>,
  setAngle: Dispatch<SetStateAction<number>>
): void {
  useEffect(() => {
    const element = inputElement.current
    if (element == null) return

    let pointerID: number
    const center: PointerCoord = { x: 0, y: 0 }
    element.addEventListener("pointerdown", onPointerDown)

    const angleRange = [-22.5, 22.5, 67.5, 112.5, 157.5, 180]

    const movePointer = throttlefy(
      (coord: PointerCoord, shift: boolean) => {
        const centeredCoords = {
          x: coord.x - center.x,
          y: -(coord.y - center.y)
        }

        let angle =
          (Math.atan2(centeredCoords.y, centeredCoords.x) * 180) / Math.PI

        if (shift) {
          if (angle > 0) {
            for (let i = 0; i < angleRange.length - 1; i++) {
              if (angle > angleRange[i] && angle < angleRange[i + 1]) {
                angle = angleRange[i] + 45 / 2
              }
            }
          }
          if (angle < 0) {
            for (let i = 0; i < angleRange.length - 1; i++) {
              if (angle < -angleRange[i] && angle > -angleRange[i + 1]) {
                angle = -angleRange[i] - 45 / 2
              }
            }
          }
        }

        setAngle(angle)
      },
      import.meta.env.VITE_THROTTLE_TIME
    )

    function onPointerDown(e: PointerEvent): void {
      if (element == null) return
      pointerID = e.pointerId
      element.setPointerCapture(pointerID)
      const rect = element.getBoundingClientRect()
      center.x = rect.x + rect.width / 2
      center.y = rect.y + rect.height / 2

      element.addEventListener("pointermove", onPointerMove)
      element.addEventListener("pointerup", onPointerUp)
    }

    function onPointerMove(e: PointerEvent): void {
      movePointer({ x: e.clientX, y: e.clientY }, e.shiftKey)
    }

    function onPointerUp(): void {
      element?.releasePointerCapture(pointerID)
      element?.removeEventListener("pointermove", onPointerMove)
    }

    return (): void => {
      element.removeEventListener("pointerdown", onPointerDown)
    }
  }, [inputElement, setAngle])
}

export default useAngleDrag
