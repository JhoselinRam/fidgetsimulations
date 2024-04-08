import type { ReactNode } from "react"
import type { UseMagnitude } from "../../../../hooks/useSimpleForce/resources/useMagnitude/useMagnitude_types"

export interface MagnitudeConfigProps {
  hooks: UseMagnitude
  unit: string | ReactNode
  magnitudeName: string
  magnitudeHeader: string
  magnitudeDecimals?: number
  magnitudeStep?: number
  magnitudeScientificNotation?: boolean
}
