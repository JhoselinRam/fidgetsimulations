import type { SimpleState } from "../useMainState/useMainState_types"

export interface UseLinkDynamics extends LinkDynamicsHooks, LinkBallList {}

export interface LinkDynamicsHooks {
  lengthHooks: SimpleState<number>
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
}
