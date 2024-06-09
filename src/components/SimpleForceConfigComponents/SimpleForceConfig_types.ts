import type { CollectionOrder } from "../../hooks/useMainState/useMainState_types"
import type { UseSimpleForce } from "../../hooks/useSimpleForce/useSimpleForce_types"
import type { MagnitudeConfigProps } from "./resources/MagnitudeConfig/MagnitudeConfig_types"

export interface SimpleForceConfigProps
  extends Omit<MagnitudeConfigProps, keyof UseSimpleForce> {
  item: CollectionOrder
}
