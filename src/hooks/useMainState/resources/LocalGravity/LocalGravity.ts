import {
  createSimpleNewCollectionSlice,
  createSimpleSlice
} from "../../useMainState"
import type { LocalGravityKeys } from "./LocalGravity_types"
import { localGravityDefaultState } from "./defaultState"

export const localGravityNew = createSimpleNewCollectionSlice(
  "localGravity",
  localGravityDefaultState
)

export const localGravityMagnitudeX = createSimpleSlice<LocalGravityKeys>(
  "magnitudeX",
  "localGravity"
)
export const localGravityMagnitudeY = createSimpleSlice<LocalGravityKeys>(
  "magnitudeY",
  "localGravity"
)
