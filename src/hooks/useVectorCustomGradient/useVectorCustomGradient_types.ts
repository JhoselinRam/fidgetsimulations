import type { GradientInputKnob } from "../useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../useGradientInput/resources/useGradientStep/useGradientStep_types"
import type { VectorGradientType } from "../useMainState/resources/Vector/Vector_types"
import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseVectorCustomGradient {
  gradientType: VectorGradientType
  gradientStopsHooks: SimpleState<GradientInputKnob[]>
  gradientSpace: {
    outerSpace: GradientColorSpace
    onOuterSpaceChange: (value: GradientColorSpace) => void
  }
}
