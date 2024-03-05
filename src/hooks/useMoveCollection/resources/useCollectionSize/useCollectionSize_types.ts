export interface UseCollectionSize {
  width: number
  height: number
  changeWidth: (width: number) => void
  changeHeight: (height: number) => void
  isRatioLock: boolean
  changeRatioLock: (isLock: boolean) => void
}
