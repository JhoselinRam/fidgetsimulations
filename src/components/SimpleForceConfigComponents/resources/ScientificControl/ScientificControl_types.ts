import type { ReactNode } from "react"
import type { SimpleState } from "../../../../hooks/useMainState/useMainState_types"

export interface ScientificControlProps {
  scientificMagnitudeHooks: SimpleState<number>
  scientificPowerHooks: SimpleState<number>
  unit: ReactNode
  magnitudeName: string
}
