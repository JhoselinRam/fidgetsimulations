import type {
  LocalGravityMagnitude,
  LocalGravityState
} from "./LocalGravity_types"

export const localGravityMagnitudeDefaultState: LocalGravityMagnitude = {
  magnitudeX: 0,
  magnitudeY: -9.81
}

export const localGravityDefaultState: LocalGravityState = {
  ...localGravityMagnitudeDefaultState,
  type: "localGravity",
  id: "",
  name: ""
}

export function createLocalGravityState(): LocalGravityState {
  const newState = { ...localGravityDefaultState }

  newState.id = crypto.randomUUID()

  return newState
}
