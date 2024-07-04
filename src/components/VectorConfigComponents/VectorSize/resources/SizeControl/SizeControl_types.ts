import type { CollectionType } from "../../../../../hooks/useMainState/useMainState_types"
import type { UseVectorSize } from "../../../../../hooks/useVectorSize/useVectorSize_types"

export interface SizeControlProps extends Omit<UseVectorSize, "enableHooks"> {
  type: CollectionType
}
