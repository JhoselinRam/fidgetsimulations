import type { CollectionOrder } from "../../../../../hooks/useMainState/useMainState_types"
import type { UseDynamicColor } from "../../../../../hooks/useVectorColor/resources/useDynamicColor/useDynamicColor_types"

export interface DynamicControlProps extends UseDynamicColor {
  item: CollectionOrder
}
