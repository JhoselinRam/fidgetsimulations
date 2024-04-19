import {
  type Dispatch,
  type SetStateAction,
  type RefObject,
  type PointerEvent as RPointerEvent,
  useRef,
  useState
} from "react"
import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../useGradientStep/useGradientStep_types"
import { createColorGradient } from "../../../../auxiliary/colorGradient"
import type { GradientOnMoveKnob } from "../useGradientMove/useGradientMove_types"
import type { UseGradientPointer } from "./useGradientPointer_types"
import { throttlefy } from "../../../../auxiliary/throttlefy"

function useGradientPointer(
  knobs: GradientInputKnob[],
  setKnobs: Dispatch<SetStateAction<GradientInputKnob[]>>,
  space: GradientColorSpace,
  mainElement: RefObject<HTMLDivElement>,
  onMoveKnob: GradientOnMoveKnob
): UseGradientPointer {
  const pointerId = useRef(0)
  const knobSelectedRef = useRef(0)
  const [knobSelected, setKnobSelected] = useState(0)

  function onGradientPointerDown(e: RPointerEvent): void {
    if (mainElement.current == null) return
    const element = mainElement.current

    if (
      !(e.target as HTMLDivElement).classList.contains("gradient-enable-add")
    ) {
      pointerId.current = e.pointerId
      mainElement.current.setPointerCapture(e.pointerId)
      mainElement.current.style.cursor = "col-resize"
      mainElement.current.addEventListener("pointermove", onPointerMove)
      mainElement.current.addEventListener("pointerup", onPointerUp)
      return
    }
    const colorMap = createColorGradient(knobs, space)
    const elementRect = element.getBoundingClientRect()
    const elementPosition = elementRect.x
    const elementWidth = elementRect.width
    const pointerPosition = e.pageX

    const position = (pointerPosition - elementPosition) / elementWidth
    const color = colorMap(position)

    const newKnobs = [...knobs]
    newKnobs.push({ position, color })

    setKnobs(newKnobs)
  }

  const moveKnob = throttlefy(
    (e: PointerEvent) => {
      const element = mainElement.current
      if (element == null) return

      const mainRects = element.getBoundingClientRect()
      const mainPosition = mainRects.x
      const mainWidth = mainRects.width
      const pointerPosition = e.clientX

      onMoveKnob(
        (pointerPosition - mainPosition) / mainWidth,
        knobSelectedRef.current
      )
    },
    import.meta.env.VITE_THROTTLE_TIME
  )

  function onPointerMove(e: PointerEvent): void {
    moveKnob(e)
  }

  function onPointerUp(): void {
    if (mainElement.current == null) return
    mainElement.current.removeEventListener("pointermove", onPointerMove)
    mainElement.current.releasePointerCapture(pointerId.current)
    mainElement.current.removeEventListener("pointerup", onPointerUp)
    mainElement.current.style.cursor = "copy"
  }

  function changeKnobSelected(index: number): void {
    setKnobSelected(index)
    knobSelectedRef.current = index
  }

  return {
    onGradientPointerDown,
    changeKnobSelected,
    knobSelected
  }
}

export default useGradientPointer
