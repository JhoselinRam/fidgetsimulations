import type { CollectionType } from "../../../../../hooks/useMainState/useMainState_types"
import type { UseColorRange } from "../../../../../hooks/useVectorColor/resources/useColorRange/useColorRange_types"

export interface ColorRangeControlProps extends UseColorRange {
  type: CollectionType
}
