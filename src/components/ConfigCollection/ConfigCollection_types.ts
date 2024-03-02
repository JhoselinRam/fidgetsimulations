import type { PropsWithChildren } from "react"
import type { CollectionOrder } from "../../hooks/useMainState/useMainState_types"

export type ConfigCollectionProps = PropsWithChildren<{
  item: CollectionOrder
}>
