import type { SimpleForceElementType } from "../useMainState/resources/SimpleForce/SimpleForce_types"
import type { SimpleState } from "../useMainState/useMainState_types"
import type { UseMagnitude } from "./resources/useMagnitude/useMagnitude_types"
import type { UseScientific } from "./resources/useScientific/useScientific_types"

export interface UseSimpleForce extends UseScientific {
  simpleMagnitudeHooks: UseMagnitude
  scientificHooks: SimpleState<boolean>
}

export interface MagnitudeProps {
  magnitude: number
}

export type MagnitudeDefaultValue = {
  [k in SimpleForceElementType]: number
}
