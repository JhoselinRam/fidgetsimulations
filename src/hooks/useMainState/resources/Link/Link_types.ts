import type { CollectionState } from "../../useMainState_types"

export type LinkActionType =
  | LinkLengthActionType
  | LinkBallActionType
  | LinkColorActionType

export interface LinkState
  extends CollectionState,
    LinkLength,
    LinkBall,
    LinkColor {}

export type LinkStateKeys = keyof LinkState

// --------------------------------------------------------
// --------------------- Length ---------------------------

export type LinkLengthActionType = "link@length"

export interface LinkLength {
  length: number
}

// --------------------------------------------------------
// ---------------------- Balls ---------------------------

export type LinkBallActionType = "link@linkBall"

export interface LinkBall {
  linkBall: LinkBallArray
}

export type LinkBallArray = Array<readonly [string, string]>

// --------------------------------------------------------
// --------------------- Color ----------------------------

export type LinkColorActionType = "link@color" | "link@opacity"

export interface LinkColor {
  color: string
  opacity: number
}

// --------------------------------------------------------
