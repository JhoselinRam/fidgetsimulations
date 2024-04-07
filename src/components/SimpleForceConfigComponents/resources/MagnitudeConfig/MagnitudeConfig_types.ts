import type { ReactNode } from "react"
import type { CollectionOrder } from "../../../../hooks/useMainState/useMainState_types"

export interface MagnitudeConfigProps {
  item: CollectionOrder
  unit: string | ReactNode
  name: string
  header: string
}
