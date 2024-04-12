import type {
  BallPosition,
  BallPositionActionType,
  BallVelocity,
  BallVelocityActionType
} from "../useMainState/resources/Balls/Balls_types"

export interface UseBallDynamics {
  positionHooks: BallDynamicsHooks
  velocityHooks: BallDynamicsHooks
}

export interface BallDynamicsHooks {
  valueX: number
  changeValueX: (value: number) => void
  valueY: number
  changeValueY: (value: number) => void
}

interface AxisProperty<T> {
  x: T
  y: T
}

export type BallPositionByAxis = AxisProperty<keyof BallPosition>

export type BallPositionActionByAxis = AxisProperty<BallPositionActionType>

export interface BallDynamicsPropertyHooks {
  value: number
  changeValue: (value: number) => void
}

export type BallVelocityByAxis = AxisProperty<keyof BallVelocity>
export type BallVelocityActionByAxis = AxisProperty<BallVelocityActionType>
