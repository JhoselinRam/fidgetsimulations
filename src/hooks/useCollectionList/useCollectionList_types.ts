import type { UseListSelection } from "./resources/useListSelection/useListSelection_types"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseListReorder } from "./resources/useListReorder/useListReorder_types"

export interface UseCollectionList extends UseListSelection, UseListReorder {
  items: CollectionOrder[]
}
