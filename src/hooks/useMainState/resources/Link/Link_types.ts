import type { CollectionState } from "../../useMainState_types"

export type LinkActionType = LinkLengthActionType | LinkBallActionType

export interface LinkState extends CollectionState, LinkLength, LinkBall {}

export type LinkStateKeys = keyof LinkState

// --------------------------------------------------------
// --------------------- Length ---------------------------

export type LinkLengthActionType = "link@linkLength"

export interface LinkLength {
  linkLength: number
}

// --------------------------------------------------------
// --------------------------------------------------------

export type LinkBallActionType =
  | "link@linkBall"
  | "link@linkBallAdd"
  | "link@linkBallRemove"

export interface LinkBall {
  linkBall: Array<readonly [string, string]>
}

// --------------------------------------------------------
