import type { VectorState } from "../Vector/Vector_types"

export type VelocityVectorActionType = "velocityVector@new"

export interface VelocityVectorState extends VectorState {}

export interface VelocityVectorElementState {
  velocityVector: VelocityVectorState[]
}

export type VelocityVectorElementType = keyof VelocityVectorElementState
