import type { ReactNode } from "react"
import type { CollectionType } from "../useMainState/useMainState_types"
import type { UseDeleteItem } from "./resources/useDeleteItem/useDeleteItem_types"

export interface UseCollectionItem extends UseDeleteItem {
  name: string
  icon: ReactNode
  selectOnAction: () => void
  isDisabled: boolean
  onDelete: () => void
  shouldExit: boolean
}

export type ItemIcon = {
  [k in CollectionType]: ReactNode
}
