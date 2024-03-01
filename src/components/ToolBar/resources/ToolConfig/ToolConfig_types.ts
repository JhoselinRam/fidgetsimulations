import type { ReactNode } from "react"
import type { CollectionType } from "../../../../hooks/useMainState/useMainState_types"

export type ConfigByType = {
  [k in CollectionType]: ReactNode
}
