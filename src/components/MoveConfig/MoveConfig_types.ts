import type {
  CollectionOrder,
  MainStateActionType
} from "../../hooks/useMainState/useMainState_types"

export interface MoveConfigProps {
  step: number
  unit: string
  actionX: MainStateActionType
  actionY: MainStateActionType
  valueX: number
  valueY: number
  item: CollectionOrder
}
