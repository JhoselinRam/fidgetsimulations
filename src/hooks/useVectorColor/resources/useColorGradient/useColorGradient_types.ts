import type { GradientInputKnob } from "../../../useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../../../useGradientInput/resources/useGradientStep/useGradientStep_types"
import type { VectorGradientType } from "../../../useMainState/resources/Vector/Vector_types"
import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseColorGradient {
  gradientTypeHooks: SimpleState<VectorGradientType>
  spaceHooks: SimpleState<GradientColorSpace>
  gradientStopsHooks: SimpleState<GradientInputKnob[]>
}
