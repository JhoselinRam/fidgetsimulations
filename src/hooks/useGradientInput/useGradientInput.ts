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

function useGradientInput(
  resolution: number,
  value?: GradientInputKnob[],
  onChange?: GradientOnChange,
  outerSpace?: GradientColorSpace,
  onOuterSpaceChange?: GradientOnSpaceChange
): UseGradientInput {
  const { knobs } = useGradientKnob(value, onChange)
  const { steps, changeSpace, space } = useGradientStep(
    resolution,
    knobs,
    outerSpace,
    onOuterSpaceChange
  )

  return {
    knobs,
    steps,
    changeSpace,
    space
  }
}

export default useGradientInput
