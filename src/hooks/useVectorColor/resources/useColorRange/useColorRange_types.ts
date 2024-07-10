import type { SimpleVectorState } from "../../useVectorColor_types"

export interface UseColorRange {
  minMagnitudeHooks: SimpleVectorState<number>
  maxMagnitudeHooks: SimpleVectorState<number>
}
