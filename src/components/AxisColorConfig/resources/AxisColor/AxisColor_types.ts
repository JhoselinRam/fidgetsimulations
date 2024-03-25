import type { AxisColorHooks } from "../../../../hooks/useAxisColorConfig/useAxisColorConfig_types"

export interface AxisColorProps {
  axis: "x" | "y"
  hooks: AxisColorHooks
}
