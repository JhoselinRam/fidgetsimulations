import type { DragState } from "../useMainState/resources/Drag/Drag_types"
import type { ElectricState } from "../useMainState/resources/Electric/Electric_types"
import type { GravityState } from "../useMainState/resources/Gravity/Gravity_types"
import type {
  LocalGravityElementState,
  LocalGravityState
} from "../useMainState/resources/LocalGravity/LocalGravity_types"
import type { SimpleForceElementState } from "../useMainState/resources/SimpleForce/SimpleForce_types"
import type { MainState } from "../useMainState/useMainState_types"

export interface BallProperty {
  x: number
  y: number
}

export type ForceTypes =
  | keyof LocalGravityElementState
  | keyof SimpleForceElementState

export type ForceSelector = {
  [k in ForceTypes]: ForceComputerCallback<k>
}

export type ForceComputerCallback<T extends ForceTypes> = (
  index: number,
  state: MainState,
  force: ForceTypeSelector<T>
) => BallProperty

export type ForceTypeSelector<T extends ForceTypes> = T extends "localGravity"
  ? LocalGravityState
  : T extends "gravity"
    ? GravityState
    : T extends "drag"
      ? DragState
      : T extends "electric"
        ? ElectricState
        : never