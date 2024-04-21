import type { GradientKnobHooks } from "./resources/useGradientKnob/useGradientKnob_types"
import type { UseGradientUpdate } from "./resources/useGradientUpdate/useGradientUpdate_types"
import type { UseGradientStep } from "./resources/useGradientStep/useGradientStep_types"
import type { UseGradientPointer } from "./resources/useGradientPointer/useGradientPointer_types"
import type { UseGradientDelete } from "./resources/useGradientDelete/useGradientDelete_types"

export interface UseGradientInput
  extends GradientKnobHooks,
    UseGradientStep,
    UseGradientUpdate,
    UseGradientPointer,
    UseGradientDelete {}
