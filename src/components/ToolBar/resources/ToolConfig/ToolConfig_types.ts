import type { ReactNode } from "react"
import type {
  CollectionOrder,
  CollectionType
} from "../../../../hooks/useMainState/useMainState_types"

export type ConfigByType = {
  [k in CollectionType]: (item: CollectionOrder) => ReactNode
}
