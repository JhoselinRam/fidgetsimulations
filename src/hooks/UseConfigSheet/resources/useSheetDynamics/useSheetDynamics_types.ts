import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseSheetDynamics {
  positionHooks: DynamicsAxisHooks
  velocityHooks: DynamicsAxisHooks
}

export interface DynamicsAxisHooks {
  xHooks: SimpleState<number>
  yHooks: SimpleState<number>
}
