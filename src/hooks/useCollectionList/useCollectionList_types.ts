import type { UseListSelection } from "./resources/useListSelection/useListSelection_types"
import type { CollectionOrder } from "../useMainState/useMainState_types"

export interface UseCollectionList extends UseListSelection {
  items: CollectionOrder[]
}
