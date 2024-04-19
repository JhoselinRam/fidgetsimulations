import type { GradientInputKnob } from "../../../../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { ChangeKnobSelectedHooks } from "../../../../hooks/useGradientInput/resources/useGradientPointer/useGradientPointer_types"

export interface GradientSelectKnobProps extends ChangeKnobSelectedHooks {
  knobs: GradientInputKnob[]
}
