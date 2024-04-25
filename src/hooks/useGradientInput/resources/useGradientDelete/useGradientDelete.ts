import { type Dispatch, type SetStateAction } from "react"
import type {
  GradientInputKnob,
  GradientOnChange
} from "../useGradientKnob/useGradientKnob_types"
import type { UseGradientDelete } from "./useGradientDelete_types"

function useGradientDelete(
  knobs: GradientInputKnob[],
  setKnobs: Dispatch<SetStateAction<GradientInputKnob[]>>,
  changeKnobSelected: (index: number) => void,
  onChange?: GradientOnChange
): UseGradientDelete {
  // ---------------------- Delete ---------------------------

  function onDeleteKnob(index: number): void {
    if (index < 0) return
    if (index > knobs.length - 1) return

    const newKnobs = [...knobs]
    newKnobs.splice(index, 1)

    if (index === knobs.length - 1) changeKnobSelected(index - 1)

    setKnobs(newKnobs)
    if (onChange != null) onChange(newKnobs)
  }

  // --------------------------------------------------------

  return {
    onDeleteKnob
  }
}

export default useGradientDelete
