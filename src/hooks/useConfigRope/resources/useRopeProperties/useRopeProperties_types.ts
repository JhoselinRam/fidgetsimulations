import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseRopeProperties {
  lengthHooks: SimpleState<number>
  angleHooks: SimpleState<number>
  nodesHooks: SimpleState<number>
  recursionHooks: SimpleState<number>
}
