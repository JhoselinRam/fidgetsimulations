export interface UseGradientKnob {
  knobs: GradientInputKnob[]
}

export interface GradientInputKnob {
  position: number
  color: string
}

export type GradientOnChange = (knobs: GradientInputKnob[]) => void
