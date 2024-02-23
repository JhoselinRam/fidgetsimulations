import type { CollectionOption } from "../CollectionSelect/CollectionSelect_types"
import type { CollectionButtonProps } from "../CollectionButton/CollectionButton_types"

export interface CollectionsGridProps {
  selection: CollectionOption
}

export type ItemsBySelection = {
  [k in CollectionOption]: ItemType[]
}

export interface ItemType extends CollectionButtonProps {
  id: string
}
