import { type Dispatch, type SetStateAction } from "react"
import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"
import type { UseGradientMove } from "./useGradientMove_types"

function useGradientMove(
  knobs: GradientInputKnob[],
  setKnobs: Dispatch<SetStateAction<GradientInputKnob[]>>
): UseGradientMove {
  function onMoveKnob(position: number, index: number): void {
    if (index < 0) return
    if (index > knobs.length - 1) return
    const minPosition = index === 0 ? 0 : knobs[index - 1].position + 0.001
    const maxPosition =
      index === knobs.length - 1 ? 1 : knobs[index + 1].position - 0.001

    const newKnobs = knobs.slice()
    newKnobs[index].position =
      position < minPosition
        ? minPosition
        : position > maxPosition
          ? maxPosition
          : position

    setKnobs(newKnobs)
  }

  return {
    onMoveKnob
  }
}

export default useGradientMove
