import type { ReactNode } from "react"
import type { CollectionType } from "../useMainState/useMainState_types"

export interface UseCollectionItem {
  name: string
  icon: ReactNode
}

export type ItemIcon = {
  [k in CollectionType]: ReactNode
}
