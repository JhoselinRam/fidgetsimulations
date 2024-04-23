import type {
  GradientInputKnob,
  GradientOnChange
} from "../../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type {
  GradientColorSpace,
  GradientOnSpaceChange
} from "../../hooks/useGradientInput/resources/useGradientStep/useGradientStep_types"

export interface GradientInputProps {
  className?: string
  controlClassName?: string
  resolution?: number
  placement?: "bottom" | "top"
  value?: GradientInputKnob[]
  onChange?: GradientOnChange
  outerSpace?: GradientColorSpace
  onOuterSpaceChange?: GradientOnSpaceChange
  isDisabled?: boolean
}
