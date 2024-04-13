import type {
  BallCharge,
  BallColor,
  BallMass,
  BallRadius
} from "../useMainState/resources/Balls/Balls_types"
import type { MainState } from "../useMainState/useMainState_types"

export interface UseBallProperties {
  massAndChargeHooks: MassAndChargeHooks
  aestheticsHooks: AestheticsHooks
}

export interface MassAndChargeHooks {
  mass: number
  changeMass: (value: number) => void
  charge: number
  changeCharge: (value: number) => void
}

export interface AestheticsHooks {
  radius: number
  changeRadius: (value: number) => void
  color: string
  changeColor: (value: string) => void
}

export type BallPropertyGetter<T extends BallPropertiesKeys> = (
  id: string,
  state: MainState
) => T extends "color" ? string : number

export type BallPropertiesKeys = keyof (BallMass &
  BallCharge &
  BallRadius &
  BallColor)

export type BallDefaultProperties = {
  [k in BallPropertiesKeys]: k extends "color" ? string : number
}
