import type {
  VectorMode,
  VectorSize
} from "../useMainState/resources/Vector/Vector_types"
import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseVectorSize {
  normalizeHooks: SwitchHooks
  enableHooks: SwitchHooks
  sizeHooks: VectorMaxSizeHooks
}

export interface SwitchHooks {
  isSelected: boolean
  onChange: (value: boolean) => void
}

export interface VectorSizeHooks extends SimpleState<number> {
  isDisabled: boolean
}

export interface VectorMaxSizeHooks {
  maxSizeHooks: VectorSizeHooks
  magnitudeHooks: VectorSizeHooks
}

export interface VectorSizeProps
  extends VectorSize,
    Pick<VectorMode, "normalize" | "enable"> {}
