import type {
  LinkBallPairElement,
  LinkBallPairHooks
} from "../../../../../hooks/useLinkBallModal/useLinkBallModal_types"

export interface LinkModalPairElementProps
  extends Omit<LinkBallPairHooks, "pairElements"> {
  pairElement: LinkBallPairElement
}
