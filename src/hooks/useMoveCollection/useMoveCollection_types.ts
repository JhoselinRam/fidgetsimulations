import type { UseCollectionPosition } from "./resources/useCollectionPosition/useCollectionPosition_types"
import type { UseCollectionSize } from "./resources/useCollectionSize/useCollectionSize_types"

export interface UseMoveCollection {
  moveControlProps: UseCollectionPosition
  sizeControlProps: UseCollectionSize
}
