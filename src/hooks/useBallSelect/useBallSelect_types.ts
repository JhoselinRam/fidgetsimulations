import type { Key } from "react-aria-components"

export interface UseBallSelect extends BallSelectHooks {
  isValidSelection: boolean
}

export interface BallSelectHooks {
  ballId: string
  changeId: (id: Key) => void
  items: BallSelectionItem[]
}

export interface BallSelectionItem {
  id: string
  name: string
}
