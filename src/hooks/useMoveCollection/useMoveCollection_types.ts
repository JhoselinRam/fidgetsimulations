export interface UseMoveCollection extends MoveCollectionProps {
  manualControlProps: {
    isSelected: boolean
    onChange: (value: boolean) => void
  }
}

export interface MoveCollectionProps {
  positionX: number
  positionY: number
  width: number
  height: number
  lockRatio: boolean
  manualEdit: boolean
}
