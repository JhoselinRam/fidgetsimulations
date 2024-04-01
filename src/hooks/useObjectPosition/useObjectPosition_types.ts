export interface UseObjectPosition extends ObjectPositionProps {
  setAspectRatio: () => void
}

export interface ObjectPositionProps {
  positionX: number
  positionY: number
  width: number
  height: number
  ratioLock: boolean
}
