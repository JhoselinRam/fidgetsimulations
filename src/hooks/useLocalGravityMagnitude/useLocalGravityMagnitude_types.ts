import type { Dispatch, SetStateAction } from "react"
import type {
  LocalGravityActionType,
  LocalGravityMagnitude
} from "../useMainState/resources/LocalGravity/LocalGravity_types"

export interface UseLocalGravityMagnitude {
  rectangularHooks: LocalGravityMagnitudeRectangularHooks
  polarHooks: LocalGravityMagnitudePolarHooks
}

export interface LocalGravityMagnitudeRectangularHooks {
  magnitudeX: number
  magnitudeY: number
  changeMagnitudeX: (magnitude: number) => void
  changeMagnitudeY: (magnitude: number) => void
}

export interface LocalGravityMagnitudePolarHooks {
  magnitude: number
  angle: number
  changeMagnitude: (value: number) => void
  changeAngle: (value: number) => void
}

export type LocalGravityActionPiker = {
  [k in keyof LocalGravityMagnitude]: LocalGravityActionType
}

export type LocalGravitySetterPiker = {
  [k in keyof LocalGravityMagnitude]: Dispatch<SetStateAction<number>>
}
