import type { ReactNode } from "react"
import type { UseSimpleForce } from "../../../../hooks/useSimpleForce/useSimpleForce_types"

export interface MagnitudeConfigProps extends UseSimpleForce {
  unit: ReactNode
  magnitudeName: string
  magnitudeHeader: string
  magnitudeDecimals?: number
  magnitudeStep?: number
  infoText?: ReactNode
}
