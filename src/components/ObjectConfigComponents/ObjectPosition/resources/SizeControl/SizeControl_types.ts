import type { CollectionOrder } from "../../../../../hooks/useMainState/useMainState_types"

export interface SizeControlProps {
  item: CollectionOrder
  width: number
  height: number
  ratioLock: boolean
}
