import type { Dispatch } from "react"
import type {
  GraphicActionType,
  GraphicElementType,
  GraphicalElementsState
} from "./resources/GraphicElement/GraphicElement_types"
import type {
  TimeActionType,
  TimeState
} from "./resources/TimeParameters/TimeParameters_types"
import type {
  LinechartActionType,
  LinechartState
} from "./resources/Linechart/LineChart_types"
import type {
  DataOutputActionType,
  DataOutputState
} from "./resources/DataOutput/DataOutput_types"
import type { CollectionActionType } from "./resources/Collection/Collection_types"
import type {
  ContainerActionType,
  ContainerElementState,
  ContainerElementType,
  ContainerState
} from "./resources/Container/Container_types"
import type { SimulationWindowState } from "./resources/SimulationWindow/SimulationWindow_types"
import type {
  ObstacleActionType,
  ObstacleElementState,
  ObstacleElementType,
  ObstacleState
} from "./resources/Obstacle/Obstacle_types"
import type {
  BallActionType,
  BallElementState,
  BallElementType,
  BallState
} from "./resources/Balls/Balls_types"
import type {
  LocalGravityActionType,
  LocalGravityElementState,
  LocalGravityElementType,
  LocalGravityState
} from "./resources/LocalGravity/LocalGravity_types"
import type {
  SimpleForceActionType,
  SimpleForceElementState,
  SimpleForceElementType
} from "./resources/SimpleForce/SimpleForce_types"
import type {
  GravityActionType,
  GravityState
} from "./resources/Gravity/Gravity_types"
import type { DragActionType, DragState } from "./resources/Drag/Drag_types"
import type {
  ElectricActionType,
  ElectricState
} from "./resources/Electric/Electric_types"
import type { VelocityVectorState } from "./resources/VelocityVector/VelocityVector_types"
import type { AccelerationVectorState } from "./resources/AccelerationVector/AccelerationVector_types"
import type { VectorActionType } from "./resources/Vector/Vector_types"
import type {
  SimulationActionType,
  SimulationState
} from "./resources/Simulation/Simulation_types"
import type {
  DampingActionType,
  DampingState
} from "./resources/Damping/Damping_types"

// Type of the useMainState hook
export interface UseMainState {
  mainState: MainState
  dispatch: Dispatch<MainStateAction>
}

// All actions available
export type MainStateActionType =
  | GraphicActionType
  | TimeActionType
  | LinechartActionType
  | DataOutputActionType
  | CollectionActionType
  | ContainerActionType
  | ObstacleActionType
  | LocalGravityActionType
  | SimpleForceActionType
  | GravityActionType
  | DragActionType
  | ElectricActionType
  | DampingActionType
  | BallActionType
  | VectorActionType
  | SimulationActionType

// Main state type
export interface MainState
  extends GraphicalElementsState,
    ContainerElementState,
    ObstacleElementState,
    BallElementState,
    LocalGravityElementState,
    SimpleForceElementState {
  order: CollectionOrder[]
  time: TimeState
  velocityVector: VelocityVectorState
  accelerationVector: AccelerationVectorState
  simulation: SimulationState
}

// Action type
export interface MainStateAction {
  type: MainStateActionType
  payload: Record<string, unknown>
}

// Type of the reducer object
export type ReducerObject = {
  [k in MainStateActionType]: ReducerSlice
}

// Type pf the reducer slice function
export type ReducerSlice = (
  state: MainState,
  payload: Record<string, unknown>
) => MainState

export type CollectionType =
  | GraphicElementType
  | ContainerElementType
  | ObstacleElementType
  | BallElementType
  | LocalGravityElementType
  | SimpleForceElementType

export type CollectionElementState =
  | SimulationWindowState
  | LinechartState
  | DataOutputState
  | ContainerState
  | ObstacleState
  | BallState
  | LocalGravityState
  | GravityState
  | DragState
  | ElectricState
  | DampingState

export interface CollectionState extends CollectionOrder {
  name: string
}

export interface CollectionOrder {
  id: string
  type: CollectionType
}

export interface GraphicCollection {
  id: string
  type: GraphicElementType
}

export interface SimpleState<T> {
  value: T
  onChange: (value: T) => void
}

export type ValidStaticPayloadType<S, T extends keyof S, ID> = {
  [k in T]: S[T]
} & {
  id: ID
}
