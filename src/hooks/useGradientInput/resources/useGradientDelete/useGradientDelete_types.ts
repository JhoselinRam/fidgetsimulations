export interface UseGradientDelete {
  onDeleteKnob: GradientOnDeleteKnob
}

export type GradientOnDeleteKnob = (index: number) => void
