import type { ReactNode } from "react"
import type { UseSimpleForce } from "../../../../hooks/useSimpleForce/useSimpleForce_types"

export interface MagnitudeConfigProps extends UseSimpleForce {
  unit: ReactNode
  magnitudeName: ReactNode
  magnitudeHeader: string
  magnitudeDecimals?: number
  magnitudeStep?: number
  infoText?: ReactNode
  children?: ReactNode
}
