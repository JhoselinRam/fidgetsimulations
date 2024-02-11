// Actions available
export type TimeActionType =
  | "time@continuous"
  | "time@time"
  | "time@dt"
  | "time@delay"

// Time state type
export interface TimeState {
  continuous: boolean
  time: number
  dt: number
  delay: number
}

// Keys of the time state type
export type TimeKeys = keyof TimeState
