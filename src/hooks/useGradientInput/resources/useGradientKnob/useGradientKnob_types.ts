import type { Dispatch, SetStateAction } from "react"

export interface UseGradientKnob extends GradientKnobHooks {
  setKnobs: Dispatch<SetStateAction<GradientInputKnob[]>>
}

export interface GradientKnobHooks {
  knobs: GradientInputKnob[]
}

export interface GradientInputKnob {
  position: number
  color: string
}

export type GradientOnChange = (knobs: GradientInputKnob[]) => void
