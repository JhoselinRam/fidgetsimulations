import type {
  CollectionOrder,
  MainStateActionType
} from "../../hooks/useMainState/useMainState_types"

export interface SizeConfigProps {
  // width: number
  // height: number
  // changeWidth: (width: number) => void
  // changeHeight: (height: number) => void
  // isRatioLock: boolean
  // changeRatioLock: (isLock: boolean) => void
  unit: string
  step: number
  item: CollectionOrder
  actionWidth: MainStateActionType
  actionHeight: MainStateActionType
  actionRatioLock: MainStateActionType
  valueWidth: number
  valueHeight: number
  valueRatioLock: boolean
}
