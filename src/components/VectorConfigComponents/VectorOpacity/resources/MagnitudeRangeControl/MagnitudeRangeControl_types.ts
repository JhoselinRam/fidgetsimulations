import type { CollectionType } from "../../../../../hooks/useMainState/useMainState_types"
import type { UseOpacityRange } from "../../../../../hooks/useVectorOpacity/resources/useOpacityRange/useOpacityRange_types"

export interface MagnitudeRangeControlPros extends UseOpacityRange {
  type: CollectionType
}
