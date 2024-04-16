import type { GradientInputKnob } from "../../../../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type {
  GradientColorSpace,
  GradientOnSpaceChange
} from "../../../../hooks/useGradientInput/resources/useGradientStep/useGradientStep_types"

export interface GradientConfigProps {
  space: GradientColorSpace
  changeSpace: GradientOnSpaceChange
  knobs: GradientInputKnob[]
}
