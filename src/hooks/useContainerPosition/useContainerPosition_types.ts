export interface UseContainerPosition extends ContainerPositionProps {
  setAspectRatio: () => void
}

export interface ContainerPositionProps {
  positionX: number
  positionY: number
  width: number
  height: number
  ratioLock: boolean
}
