import type { GradientInputKnob } from "../../../useGradientInput/resources/useGradientKnob/useGradientKnob_types"

export type ColorControlMode = "fixed" | "linear" | "random"

export type UseColorControl = {
  [k in ColorControlMode]: k extends "fixed"
    ? ColorControlFixedHooks
    : ColorControlRangeHooks
} & {
  controlMode: ColorControlModeHooks
}

export interface ColorControlModeHooks {
  mode: ColorControlMode
  changeMode: (value: ColorControlMode) => void
}

export interface ColorControlFixedHooks {
  value: string
  changeValue: (value: string) => void
}

export interface ColorControlRangeHooks {
  knobs: GradientInputKnob[]
  changeKnobs: (value: GradientInputKnob[]) => void
}
