import type { UseAxisValue } from "./resources/useAxisValue/useAxisValue_types"

export interface UseAxisConfig {
  axisHooks: AxisHooks
}

export interface AxisHooks {
  x: UseAxisValue
  y: UseAxisValue
}
