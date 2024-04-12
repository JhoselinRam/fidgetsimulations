import type { MainState } from "../useMainState/useMainState_types"

export interface UseBindBallState<T> {
  value: T
  changeValue: (value: T) => void
}

export type GetBallProperty<T> = (ballId: string, state: MainState) => T
