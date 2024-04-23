import { type RefObject } from "react"
import useGradientPointer from "./resources/useGradientPointer/useGradientPointer"
import useGradientKnob from "./resources/useGradientKnob/useGradientKnob"
import type {
  GradientInputKnob,
  GradientOnChange
} from "./resources/useGradientKnob/useGradientKnob_types"
import useGradientStep from "./resources/useGradientStep/useGradientStep"
import type {
  GradientColorSpace,
  GradientOnSpaceChange
} from "./resources/useGradientStep/useGradientStep_types"
import type { UseGradientInput } from "./useGradientInput_types"
import useGradientUpdate from "./resources/useGradientUpdate/useGradientUpdate"
import useGradientDelete from "./resources/useGradientDelete/useGradientDelete"

function useGradientInput(
  resolution: number,
  mainElement: RefObject<HTMLDivElement>,
  value?: GradientInputKnob[],
  onChange?: GradientOnChange,
  outerSpace?: GradientColorSpace,
  onOuterSpaceChange?: GradientOnSpaceChange,
  isDisabled?: boolean
): UseGradientInput {
  const { knobs, setKnobs } = useGradientKnob(
    isDisabled ?? false,
    value,
    onChange
  )
  const { steps, changeSpace, space } = useGradientStep(
    resolution,
    knobs,
    outerSpace,
    onOuterSpaceChange
  )
  const { onMoveKnob, onColorKnob } = useGradientUpdate(knobs, setKnobs)
  const { onGradientPointerDown, changeKnobSelected, knobSelected } =
    useGradientPointer(
      knobs,
      setKnobs,
      space,
      mainElement,
      onMoveKnob,
      isDisabled ?? false
    )

  const { onDeleteKnob } = useGradientDelete(
    knobs,
    setKnobs,
    changeKnobSelected
  )

  return {
    knobs,
    steps,
    changeSpace,
    space,
    onMoveKnob,
    onGradientPointerDown,
    changeKnobSelected,
    knobSelected,
    onColorKnob,
    onDeleteKnob
  }
}

export default useGradientInput
