import type { UseColorControl } from "./resources/useColorControl/useColorControl_types"
import type { UseNumericControl } from "./resources/useNumericControl/useNumericControl_types"

export interface UseBallAddBatch {
  number: number
  changeNumber: (value: number) => void
  xPositionHooks: UseNumericControl
  yPositionHooks: UseNumericControl
  xVelocityHooks: UseNumericControl
  yVelocityHooks: UseNumericControl
  massHooks: UseNumericControl
  chargeHooks: UseNumericControl
  radiusHooks: UseNumericControl
  colorHooks: UseColorControl
}
