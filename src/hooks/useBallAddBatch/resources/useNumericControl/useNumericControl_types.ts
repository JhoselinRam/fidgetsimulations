export type NumericControlMode = "fixed" | "linear" | "random"

export type UseNumericControl = {
  [k in NumericControlMode]: k extends "fixed"
    ? NumericControlFixedHooks
    : NumericControlRangeHooks
} & {
  controlMode: NumericControlModeHooks
}

export interface NumericControlModeHooks {
  mode: NumericControlMode
  changeMode: (value: NumericControlMode) => void
}

export interface NumericControlFixedHooks {
  value: number
  changeValue: (value: number) => void
}

export interface NumericControlRangeHooks {
  from: number
  changeFrom: (value: number) => void
  to: number
  changeTo: (value: number) => void
}

export interface NumericControlDefaultValues {
  fix?: number
  from?: number
  to?: number
}
