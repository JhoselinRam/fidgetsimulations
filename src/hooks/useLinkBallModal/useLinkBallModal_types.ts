import type { Key, Selection } from "react-aria-components"
import type { CollectionType } from "../useMainState/useMainState_types"

export interface UseLinkBallModal {
  listHooks: LinkBallListHooks
  refreshModal: () => void
  moveHooks: LinkBallMoveHooks
  pairHooks: LinkBallPairHooks
}

export interface LinkBallListHooks extends LinkBallNames {
  ballOptions: LinkBallListElement[]
  selectedBalls: Set<Key>
  changeBallSelection: (selection: Selection) => void
}

export interface LinkBallNames {
  ballNames: readonly [string, string]
}

export interface LinkBallListElement {
  id: string
  name: string
}

export interface LinkBallMoveHooks {
  onMovePairs: () => void
}

export interface LinkBallPairHooks {
  pairElements: LinkBallPairElement[]
  collectionType: CollectionType
}

export interface LinkBallPairElement {
  id: string
  idA: string
  idB: string
  nameA: string
  nameB: string
}
