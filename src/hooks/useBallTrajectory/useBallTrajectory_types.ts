import type { BallTrajectory } from "../useMainState/resources/Balls/Balls_types"
import type { MainState, SimpleState } from "../useMainState/useMainState_types"

export interface UseBallTrajectory {
  matchColorHooks: TrajectoryMatchHooks
  aestheticHooks: TrajectoryColorHooks
  lengthHooks: TrajectoryLengthHooks
}

export interface TrajectoryMatchHooks {
  isDisabled: boolean
  isSelected: boolean
  onChange: (value: boolean) => void
}

export interface TrajectoryColorHooks {
  colorHooks: TrajectoryStateHooks<string>
  opacityHooks: TrajectoryStateHooks<number>
  fadeHooks: TrajectoryMatchHooks
}

export interface TrajectoryLengthHooks extends TrajectoryStateHooks<number> {}

export interface TrajectoryStateHooks<T> extends SimpleState<T> {
  isDisabled: boolean
}
export type BallTrajectoryKeys = keyof BallTrajectory

export type BallTrajectoryGetter<T extends BallTrajectoryKeys> = (
  id: string,
  state: MainState
) => T extends "trajectoryColor"
  ? string
  : T extends "trajectoryMatchColor" | "trajectoryFade"
    ? boolean
    : T extends "trajectoryOpacity" | "trajectoryLength"
      ? number
      : never

export type BallTrajectoryDefaultProperties = {
  [k in BallTrajectoryKeys]: k extends "trajectoryColor"
    ? string
    : k extends "trajectoryMatchColor" | "trajectoryFade"
      ? boolean
      : k extends "trajectoryOpacity" | "trajectoryLength"
        ? number
        : never
}
