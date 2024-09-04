import type { UseSheetNodes } from "../useSheetNodes/useSheetNodes_types"
import type { UseSheetRecursion } from "../useSheetRecursion/useSheetRecursion_types"
import type { UseSheetSize } from "../useSheetSize/useSheetSize_types"

export interface UseSheetProperties {
  sizeHooks: UseSheetSize
  nodesHooks: UseSheetNodes
  recursionHooks: UseSheetRecursion
}
