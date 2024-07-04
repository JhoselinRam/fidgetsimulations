import type { VectorState } from "../Vector/Vector_types"

export type AccelerationVectorActionType = "accelerationVector@new"

export interface AccelerationVectorState extends VectorState {}

export interface AccelerationVectorElementState {
  accelerationVector: AccelerationVectorState[]
}

export type AccelerationVectorElementType = keyof AccelerationVectorElementState
