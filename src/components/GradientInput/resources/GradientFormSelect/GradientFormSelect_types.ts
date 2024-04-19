import type {
  GradientColorSpace,
  GradientOnSpaceChange
} from "../../../../hooks/useGradientInput/resources/useGradientStep/useGradientStep_types"

export interface GradientFormSelectProps {
  space: GradientColorSpace
  changeSpace: GradientOnSpaceChange
}
