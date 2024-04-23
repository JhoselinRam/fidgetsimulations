import type { GradientInputKnob } from "../../../../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientOnMoveKnob } from "../../../../hooks/useGradientInput/resources/useGradientUpdate/useGradientUpdate_types"

export interface GradientFormPositionProps {
  knobs: GradientInputKnob[]
  knobSelected: number
  onMoveKnob: GradientOnMoveKnob
  isDisabled: boolean
}
