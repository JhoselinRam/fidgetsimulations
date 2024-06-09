import type { ReactNode } from "react"
import type { SimpleState } from "../../../../hooks/useMainState/useMainState_types"

export interface SimpleMagnitudeControlProps {
  simpleMagnitudeHooks: SimpleState<number>
  unit: ReactNode
  magnitudeName: ReactNode
  magnitudeDecimals?: number
  magnitudeStep?: number
}
