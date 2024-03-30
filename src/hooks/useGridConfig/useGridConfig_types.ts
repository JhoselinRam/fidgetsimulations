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
