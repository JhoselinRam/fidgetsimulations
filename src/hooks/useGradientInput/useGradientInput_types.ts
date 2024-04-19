import type { GradientKnobHooks } from "./resources/useGradientKnob/useGradientKnob_types"
import type { UseGradientMove } from "./resources/useGradientMove/useGradientMove_types"
import type { UseGradientStep } from "./resources/useGradientStep/useGradientStep_types"
import type { UseGradientPointer } from "./resources/useGradientPointer/useGradientPointer_types"

export interface UseGradientInput
  extends GradientKnobHooks,
    UseGradientStep,
    UseGradientMove,
    UseGradientPointer {}
