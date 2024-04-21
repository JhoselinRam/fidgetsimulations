import { type Dispatch, type SetStateAction } from "react"
import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"
import type { UseGradientDelete } from "./useGradientDelete_types"

function useGradientDelete(
  knobs: GradientInputKnob[],
  setKnobs: Dispatch<SetStateAction<GradientInputKnob[]>>,
  changeKnobSelected: (index: number) => void
): UseGradientDelete {
  // ---------------------- Delete ---------------------------

  function onDeleteKnob(index: number): void {
    if (index < 0) return
    if (index > knobs.length - 1) return

    const newKnobs = [...knobs]
    newKnobs.splice(index, 1)

    if (index === knobs.length - 1) changeKnobSelected(index - 1)
    setKnobs(newKnobs)
  }

  // --------------------------------------------------------

  return {
    onDeleteKnob
  }
}

export default useGradientDelete
