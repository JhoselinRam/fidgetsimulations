import type { GradientInputKnob } from "../../../../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientOnColorKnob } from "../../../../hooks/useGradientInput/resources/useGradientUpdate/useGradientUpdate_types"

export interface GradientFormColorProps {
  knobSelected: number
  knobs: GradientInputKnob[]
  onColorKnob: GradientOnColorKnob
  isDisabled: boolean
}
