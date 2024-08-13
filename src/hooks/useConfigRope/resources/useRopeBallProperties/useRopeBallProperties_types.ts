import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseRopeBallProperties {
  massChargeHooks: RopeBallMassHooks
  aestheticsHooks: RopeBallAestheticsHooks
}

export interface RopeBallMassHooks {
  massHooks: SimpleState<number>
  chargeHooks: SimpleState<number>
}

export interface RopeBallAestheticsHooks {
  radiusHooks: SimpleState<number>
  colorHooks: SimpleState<string>
}
