import type { VectorMaxSizeHooks } from "../../../../../hooks/useVectorSize/useVectorSize_types"
import type { VectorConfigType } from "../../../BallConfigComponents_types"

export interface VectorSizeControlProps
  extends VectorConfigType,
    VectorMaxSizeHooks {}
