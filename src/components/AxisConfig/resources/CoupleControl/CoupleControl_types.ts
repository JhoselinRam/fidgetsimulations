import type { CoupleHooks } from "../../../../hooks/useAxisConfig/useAxisConfig_types"
import type { AxisControlProps } from "../AxisControl/AxisControl_types"

export interface CoupleControlProps
  extends CoupleHooks,
    Pick<AxisControlProps, "axis"> {}
