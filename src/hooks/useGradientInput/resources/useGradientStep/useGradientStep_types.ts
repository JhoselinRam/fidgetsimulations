import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"

export interface UseGradientStep {
  steps: GradientStep[]
  space: GradientColorSpace
  changeSpace: GradientOnSpaceChange
}

export interface GradientStep extends GradientInputKnob {}

export type GradientColorSpace = "rgb" | "hsv" | "xyz" | "lab" | "lch"

export type GradientOnSpaceChange = (space: GradientColorSpace) => void
