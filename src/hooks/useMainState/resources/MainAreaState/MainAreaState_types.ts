// Main area action available
export type MainAreaStateActionType = PositionActionType | SizeActionType

// Main area type
export interface MainAreaState extends MainAreaPosition, MainAreaSize {}

// Keys of the main area type
export type MainAreaKeys = keyof MainAreaState

// --------------------- Position -------------------------

type PositionActionType = "mainArea@positionX" | "mainArea@positionY"

interface MainAreaPosition {
  positionX: number
  positionY: number
}

// --------------------------------------------------------
// ----------------------- Size ---------------------------

type SizeActionType = "mainArea@sizeWidth" | "mainArea@sizeHeight"

interface MainAreaSize {
  width: number
  height: number
}

// --------------------------------------------------------
// --------------------------------------------------------
