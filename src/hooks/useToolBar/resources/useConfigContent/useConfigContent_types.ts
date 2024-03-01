import type { Dispatch, SetStateAction } from "react"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"

export interface UseConfigContent {
  targetCollection: CollectionOrder | null
  setTargetCollection: Dispatch<SetStateAction<CollectionOrder | null>>
}
