import type {
  AxisColor,
  AxisColorActionType
} from "../useMainState/resources/GraphicElement/GraphicElement_types"

export interface UseAxisColorConfig {
  backgroundHooks: BackgroundColorHooks
  axisHooks: AxisColorHooks
}

export interface BackgroundColorHooks {
  value: string
  onInput: (color: string) => void
}

export interface AxisColorHooks {
  x: AxisColorProps
  y: AxisColorProps
}

export interface AxisColorProps {
  color: string
  colorChange: (color: string) => void
  opacity: number
  changeOpacity: (opacity: number) => void
}

export type ColorActionSelector = {
  [k in keyof AxisColor]: AxisColorActionType
}

export type ColorSetterSelector = {
  [k in keyof AxisColor]:
    | ((color: string) => void)
    | ((opacity: number) => void)
}
