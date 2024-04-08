import type { CollectionOrder } from "../../hooks/useMainState/useMainState_types"
import type { MagnitudeConfigProps } from "./resources/MagnitudeConfig/MagnitudeConfig_types"

export interface SimpleForceConfigProps
  extends Omit<MagnitudeConfigProps, "hooks"> {
  item: CollectionOrder
}
