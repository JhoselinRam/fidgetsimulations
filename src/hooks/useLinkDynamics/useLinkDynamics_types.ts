import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseLinkDynamics extends LinkDynamicsHooks, LinkBallList {}

export interface LinkDynamicsHooks {
  lengthHooks: LinkLengthHooks
  enableHooks: LinkEnableHooks
}

export interface LinkBallList {
  ballList: LinkBallListItem[]
}

export interface LinkBallListItem {
  id: string
  nameA: string
  nameB: string
}

export interface LinkDynamicsValues extends LinkBallList {
  length: number
  enable: boolean
}

export interface LinkEnableHooks {
  isSelected: boolean
  onChange: (value: boolean) => void
}

export interface LinkLengthHooks extends SimpleState<number> {}
