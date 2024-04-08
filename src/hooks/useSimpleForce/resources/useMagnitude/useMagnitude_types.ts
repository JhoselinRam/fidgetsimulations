import type { SimpleForceElementType } from "../../../useMainState/resources/SimpleForce/SimpleForce_types"

export interface UseMagnitude {
  value: number
  onChange: (value: number) => void
}

export interface MagnitudeProps {
  magnitude: number
}

export type MagnitudeDefaultValue = {
  [k in SimpleForceElementType]: number
}
