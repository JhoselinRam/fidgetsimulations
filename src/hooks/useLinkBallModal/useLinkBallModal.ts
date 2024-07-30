import { useContext, useRef, useState } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  LinkBallListElement,
  LinkBallPairElement,
  UseLinkBallModal
} from "./useLinkBallModal_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type { Key, Selection } from "react-aria-components"
import type { LinkBallArray } from "../useMainState/resources/Link/Link_types"
import type { RodState } from "../useMainState/resources/Rod/Rod_types"
import type { SpringState } from "../useMainState/resources/Spring/Spring_types"

function useLinkBallModal(item: CollectionOrder): UseLinkBallModal {
  const { mainState } = useContext(mainStateContext)
  const [ballOptions, setBallOptions] = useState<LinkBallListElement[]>([])
  const [selectedBalls, setSelectedBalls] = useState<Set<Key>>(new Set([]))
  const firstSelection = useRef<Key>("")
  const [ballNames, setBallNames] = useState<readonly [string, string]>([
    "",
    ""
  ])
  const [linkPairs, setLinkPairs] = useState<LinkBallArray>([])
  const [pairElements, setPairElements] = useState<LinkBallPairElement[]>([])

  function updatePairs(pairs: LinkBallArray): void {
    setLinkPairs(pairs)
    setPairElements(getPairElements(pairs, mainState))
  }

  function refreshModal(): void {
    setBallOptions(getListElements(mainState))
    const pairs = getLinkPairs(item, mainState)
    updatePairs(pairs)
  }

  function changeBallSelection(selection: Selection): void {
    let currentSelection = Array.from(selection)
    const newBallNames: [string, string] = ["", ""]

    if (currentSelection.length === 1)
      firstSelection.current = currentSelection[0]

    if (currentSelection.length > 2) {
      const secondSelection = currentSelection.find(
        (element) => !selectedBalls.has(element)
      )
      currentSelection =
        secondSelection != null
          ? [firstSelection.current, secondSelection]
          : [firstSelection.current]
    }

    currentSelection.forEach((selection, index) => {
      const nameA = mainState.balls[0].data.find(
        (ball) => ball.id === selection
      )
      newBallNames[index] = nameA != null ? nameA.name : ""
    })

    setBallNames(newBallNames)
    setSelectedBalls(new Set(currentSelection))
  }

  function onMovePairs(): void {
    if (selectedBalls.size !== 2) return

    const candidatePair = Array.from(selectedBalls) as [string, string]
    if (!isNewPair(candidatePair, linkPairs)) return

    const newPairs = [...linkPairs]
    newPairs.push(candidatePair)

    updatePairs(newPairs)
  }

  function removePair(pair: LinkBallPairElement): void {
    const newLinkPairs = linkPairs.filter((element) => {
      const setPair = new Set(element)
      return !(setPair.has(pair.idA) && setPair.has(pair.idB))
    })

    updatePairs(newLinkPairs)
  }

  return {
    refreshModal,
    listHooks: {
      ballOptions,
      changeBallSelection,
      selectedBalls,
      ballNames
    },
    moveHooks: {
      onMovePairs
    },
    pairHooks: {
      pairElements,
      collectionType: item.type,
      removePair
    }
  }
}

export default useLinkBallModal

function getListElements(state: MainState): LinkBallListElement[] {
  const listElements = state.balls[0].data.map((ball) => ({
    id: ball.id,
    name: ball.name
  }))

  return listElements
}

function getLinkPairs(item: CollectionOrder, state: MainState): LinkBallArray {
  const collection = getCollection<RodState | SpringState>(item, state, [
    "rod",
    "spring"
  ])
  if (collection == null) return []

  return collection.linkBall
}

function isNewPair(
  candidate: [string, string],
  currentPairs: LinkBallArray
): boolean {
  let isNew = true

  currentPairs.forEach((pair) => {
    const setPair = new Set(pair)
    if (setPair.has(candidate[0]) && setPair.has(candidate[1])) isNew = false
  })

  return isNew
}

function getPairElements(
  linkPairs: LinkBallArray,
  state: MainState
): LinkBallPairElement[] {
  const elements: LinkBallPairElement[] = []
  const balls = state.balls[0].data

  linkPairs.forEach((pair) => {
    const ballA = balls.find((ball) => ball.id === pair[0])
    const ballB = balls.find((ball) => ball.id === pair[1])

    if (ballA == null || ballB == null) return

    elements.push({
      id: `${ballA.id}${ballB.id}`,
      idA: ballA.id,
      idB: ballB.id,
      nameA: ballA.name,
      nameB: ballB.name
    })
  })

  return elements
}
