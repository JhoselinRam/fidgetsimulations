import type { UseAxisValue } from "./resources/useAxisValue/useAxisValue_types"

export interface UseAxisConfig {
  axisHooks: AxisHooks
  linkHooks: LinkHooks
}

export interface AxisHooks {
  x: UseAxisValue
  y: UseAxisValue
}

export interface LinkHooks {
  isSelected: boolean
  onChange: (value: boolean) => void
}
