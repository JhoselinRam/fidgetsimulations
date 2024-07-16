import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseLinkDynamics extends LinkDynamicsHooks {}

export interface LinkDynamicsHooks {
  lengthHooks: SimpleState<number>
}

export interface LinkDynamicsValues {
  length: number
}
