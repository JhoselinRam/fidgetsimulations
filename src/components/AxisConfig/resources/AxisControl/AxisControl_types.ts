import type { AxisHooks } from "../../../../hooks/useAxisConfig/useAxisConfig_types"

export interface AxisControlProps {
  axis: "x" | "y"
  axisHooks: AxisHooks
}
