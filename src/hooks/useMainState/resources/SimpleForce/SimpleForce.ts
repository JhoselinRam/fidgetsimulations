import { createSimpleSlice } from "../../useMainState"
import type { SimpleForceKeys } from "./SimpleForce_types"

export const simpleForceMagnitude = createSimpleSlice<SimpleForceKeys>(
  "magnitude",
  ["gravity", "drag", "electric", "damping"]
)
