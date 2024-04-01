import type { MainStateActionType } from "../useMainState/useMainState_types"

export interface UseObjectColor {
  borderHooks: ObjectBorderHooks
  backgroundHooks: ObjectBackgroundHooks
}

export interface ObjectBorderHooks extends ObjectHooks {
  width: number
  changeWidth: (width: number) => void
}

export interface ObjectBackgroundHooks extends ObjectHooks {}

interface ObjectHooks {
  enable: boolean
  changeEnable: (enable: boolean) => void
  color: string
  changeColor: (color: string) => void
  opacity: number
  changeOpacity: (opacity: number) => void
}

export interface ObjectColorProps {
  borderColor: string
  borderOpacity: number
  borderWidth: number
  fillColor: string
  fillOpacity: number
}

export interface ObjectActionSelector {
  container: Actions
  obstacle: Actions
}

interface Actions {
  borderColor: MainStateActionType
  borderOpacity: MainStateActionType
  borderWidth: MainStateActionType
  fillOpacity: MainStateActionType
  fillColor: MainStateActionType
}
