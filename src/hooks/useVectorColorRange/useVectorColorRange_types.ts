import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseVectorColorRange {
  minMagnitudeHooks: SimpleState<number>
  maxMagnitudeHooks: SimpleState<number>
}
