import type {
  Grid,
  GridActionType
} from "../useMainState/resources/GraphicElement/GraphicElement_types"

export interface UseGridConfig {
  primary: GridHooks
  secondary: GridHooks
}

export interface GridHooks {
  enable: boolean
  changeEnable: (value: boolean) => void
  color: string
  changeColor: (value: string) => void
}

export type GridActionSelector = {
  [k in keyof Grid]: GridActionType
}

export type GridSetterSelector = {
  [k in keyof Grid]: ((value: boolean) => void) | ((value: string) => void)
}
