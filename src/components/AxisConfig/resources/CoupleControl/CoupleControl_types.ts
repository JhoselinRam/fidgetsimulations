import type { CoupleHooks } from "../../../../hooks/useAxisConfig/resources/useAxisValue/useAxisValue_types"
import type { AxisControlProps } from "../AxisControl/AxisControl_types"

export interface CoupleControlProps
  extends CoupleHooks,
    Pick<AxisControlProps, "axis"> {}
