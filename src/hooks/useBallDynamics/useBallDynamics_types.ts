import type { Key } from "react-aria-components"
import type { UseBallRename } from "./resources/useBallRename/useBallRename_types"

export interface UseBallDynamics extends SelectIdHooks {}

export interface SelectIdHooks {
  ballId: string
  changeId: (id: Key) => void
  items: BallSelectionItem[]
  renameHooks: UseBallRename
}

export interface BallSelectionItem {
  id: string
  name: string
}
