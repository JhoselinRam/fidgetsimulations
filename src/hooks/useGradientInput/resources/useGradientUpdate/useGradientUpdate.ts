import { type Dispatch, type SetStateAction } from "react"
import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"
import type { UseGradientUpdate } from "./useGradientUpdate_types"

function useGradientUpdate(
  knobs: GradientInputKnob[],
  setKnobs: Dispatch<SetStateAction<GradientInputKnob[]>>
): UseGradientUpdate {
  // --------------------------------------------------------
  // ---------------------- Move ----------------------------

  function onMoveKnob(position: number, index: number): void {
    if (index < 0) return
    if (index > knobs.length - 1) return
    const minPosition = index === 0 ? 0 : knobs[index - 1].position + 0.001
    const maxPosition =
      index === knobs.length - 1 ? 1 : knobs[index + 1].position - 0.001

    const newKnobs = [...knobs]
    newKnobs[index].position =
      position < minPosition
        ? minPosition
        : position > maxPosition
          ? maxPosition
          : position

    setKnobs(newKnobs)
  }

  // --------------------------------------------------------
  // ---------------------- Color ---------------------------

  function onColorKnob(color: string, index: number): void {
    if (index < 0) return
    if (index > knobs.length - 1) return

    const newKnobs = [...knobs]
    newKnobs[index].color = color

    setKnobs(newKnobs)
  }

  // --------------------------------------------------------

  return {
    onMoveKnob,
    onColorKnob
  }
}

export default useGradientUpdate
