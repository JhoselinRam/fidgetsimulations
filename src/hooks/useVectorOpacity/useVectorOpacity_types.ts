import type {
  VectorMode,
  VectorOpacity
} from "../useMainState/resources/Vector/Vector_types"
import type { UseDynamicOpacity } from "./resources/useDynamicOpacity/useDynamicOpacity_types"
import type { UseOpacityMode } from "./resources/useOpacityMode/useOpacityMode_type"
import type { UseStaticOpacity } from "./resources/useStaticOpacity/useStaticOpacity_types"

export interface UseVectorOpacity {
  opacityModeHooks: UseOpacityMode
  staticOpacityHooks: UseStaticOpacity
  dynamicOpacityHooks: UseDynamicOpacity
}

export interface VectorOpacityProps
  extends VectorOpacity,
    Pick<VectorMode, "opacityMode"> {}
