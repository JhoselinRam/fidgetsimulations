import type { CollectionType } from "../../../../../hooks/useMainState/useMainState_types"
import type { UseDynamicOpacity } from "../../../../../hooks/useVectorOpacity/resources/useDynamicOpacity/useDynamicOpacity_types"

export interface DynamicControlProps extends UseDynamicOpacity {
  type: CollectionType
}
