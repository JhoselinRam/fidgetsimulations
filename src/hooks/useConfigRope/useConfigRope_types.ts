import type { RopeState } from "../useMainState/resources/Rope/Rope_types"
import type { UseRopeBallProperties } from "./resources/useRopeBallProperties/useRopeBallProperties_types"
import type { UseRopeDynamics } from "./resources/useRopeDynamics/useRopeDynamics_types"
import type { UseRopeProperties } from "./resources/useRopeProperties/useRopeProperties_types"

export interface UseConfigRope {
  propertiesHooks: UseRopeProperties
  dynamicsHooks: UseRopeDynamics
  ballPropertiesHooks: UseRopeBallProperties
  onCreate: () => void
}

export interface RopeProps extends Omit<RopeState, "name" | "id" | "type"> {}
