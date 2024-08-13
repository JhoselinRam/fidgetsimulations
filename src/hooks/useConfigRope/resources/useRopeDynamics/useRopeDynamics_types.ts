import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseRopeDynamics {
  positionHooks: DynamicsAxisHooks
  velocityHooks: DynamicsAxisHooks
}

export interface DynamicsAxisHooks {
  xHooks: SimpleState<number>
  yHooks: SimpleState<number>
}
