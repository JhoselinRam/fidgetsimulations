import type { Line_Chart } from "scigrapher/lib/es5/Data/LineChart/LineChart_Types"
import type { DampingState } from "../useMainState/resources/Damping/Damping_types"
import type { DragState } from "../useMainState/resources/Drag/Drag_types"
import type { ElectricState } from "../useMainState/resources/Electric/Electric_types"
import type { GravityState } from "../useMainState/resources/Gravity/Gravity_types"
import type {
  LocalGravityElementState,
  LocalGravityState
} from "../useMainState/resources/LocalGravity/LocalGravity_types"
import type { SimpleForceElementState } from "../useMainState/resources/SimpleForce/SimpleForce_types"
import type { MainState } from "../useMainState/useMainState_types"
import type { BallData } from "../useMainState/resources/Balls/Balls_types"

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
  ball: BallData,
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
        : T extends "damping"
          ? DampingState
          : never

export interface RectangularObjectTransform {
  transform: () => RectangularObjectTransformProps
  undo: (position: VectorProperty, lastPosition: VectorProperty) => ObjectProps
}

export type VectorProperty = [number, number]

export interface RectangularObjectTransformProps extends ObjectProps {
  objectX: VectorProperty
  objectY: VectorProperty
}

export interface ObjectProps {
  position: VectorProperty
  lastPosition: VectorProperty
}

export interface EllipticalObjectTransform {
  isInside: () => boolean | undefined
  transform: () => EllipticalObjectTransformProps
  undo: (position: VectorProperty, lastPosition: VectorProperty) => ObjectProps
}

export interface EllipticalObjectTransformProps extends ObjectProps {
  containerDistance: number
}

export interface RectangularObstacleCollision {
  type: RectangularObstacleCollisionType
  cornerCollision: RectangularCornerCollision
  edgeCollision: RectangularEdgeCollision
  position: VectorProperty
  lastPosition: VectorProperty
}

export type RectangularObstacleCollisionType =
  | "corner"
  | "edge"
  | "falseCollision"

export type RectangularCornerCollision =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"

export type RectangularEdgeCollision = "top" | "bottom" | "left" | "right"

export interface CollisionInfo {
  position: VectorProperty
  lastPosition: VectorProperty
  objectX: VectorProperty
  objectY: VectorProperty
  radius: number
}

export interface ProjectionParameter {
  parameter: number
  edge: RectangularEdgeCollision
}

export interface TrajectoryGraph {
  id: string
  graph: Line_Chart
}
