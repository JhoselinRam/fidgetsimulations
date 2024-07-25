export interface UseLinkBallModal {
  listHooks: LinkBallListHooks
  refreshModal: () => void
}

export interface LinkBallListHooks {
  ballOptions: LinkBallListElement[]
}

export interface LinkBallListElement {
  id: string
  name: string
}
