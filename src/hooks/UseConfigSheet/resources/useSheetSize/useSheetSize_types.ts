import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseSheetSize {
  widthHooks: SimpleState<number>
  heightHooks: SimpleState<number>
  angleHooks: SimpleState<number>
}
