import { useState } from "react"
import type { LinkBallPairElement } from "../useLinkBallModal/useLinkBallModal_types"
import type { UseLinkModalPairElement } from "./useLinkModalPairElement_type"

function useLinkModalPairElement(
  pairElement: LinkBallPairElement,
  removePair: (pair: LinkBallPairElement) => void
): UseLinkModalPairElement {
  const [shouldExit, setShouldExit] = useState(false)

  function onDelete(): void {
    setShouldExit(true)
  }

  function onExit(): void {
    removePair(pairElement)
  }

  return {
    onDelete,
    onExit,
    shouldExit
  }
}

export default useLinkModalPairElement
