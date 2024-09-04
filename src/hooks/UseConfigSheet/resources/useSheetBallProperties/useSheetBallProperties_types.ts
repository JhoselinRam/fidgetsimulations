import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseSheetBallProperties {
  massChargeHooks: SheetBallMassHooks
  aestheticsHooks: SheetBallAestheticsHooks
}

export interface SheetBallMassHooks {
  massHooks: SimpleState<number>
  chargeHooks: SimpleState<number>
}

export interface SheetBallAestheticsHooks {
  radiusHooks: SimpleState<number>
  colorHooks: SimpleState<string>
}
