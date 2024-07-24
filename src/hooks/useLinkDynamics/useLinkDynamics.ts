import { useContext } from "react"
import { linkLengthDefaultState } from "../useMainState/resources/Link/defaultState"
import type { RodState } from "../useMainState/resources/Rod/Rod_types"
import type { SpringState } from "../useMainState/resources/Spring/Spring_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  LinkBallListItem,
  LinkDynamicsValues,
  UseLinkDynamics
} from "./useLinkDynamics_types"
import useBindState from "../useBindState/useBindState"

function useLinkDynamics(item: CollectionOrder): UseLinkDynamics {
  const { mainState } = useContext(mainStateContext)
  const { length, ballList } = getLinkDynamics(item, mainState)

  const lengthProps = useBindState(item, length, "link@length")

  return {
    lengthHooks: {
      value: lengthProps.value,
      onChange: lengthProps.changeValue
    },
    ballList
  }
}

export default useLinkDynamics

function getLinkDynamics(
  item: CollectionOrder,
  state: MainState
): LinkDynamicsValues {
  const collection = getCollection<RodState | SpringState>(item, state, [
    "rod",
    "spring"
  ])
  if (collection == null)
    return {
      ...linkLengthDefaultState,
      ballList: []
    }

  const ballList: LinkBallListItem[] = []

  collection.linkBall.forEach((entry) => {
    const ballA = state.balls[0].data.find((ball) => ball.id === entry[0])
    const ballB = state.balls[0].data.find((ball) => ball.id === entry[1])

    if (ballA == null || ballB == null) return

    ballList.push({
      id: `${ballA.id}${ballB.id}`,
      nameA: ballA.name,
      nameB: ballB.name
    })
  })

  return {
    length: collection.length,
    ballList: [
      { id: "aaaaa", nameA: "Ball 1", nameB: "Ball 2" },
      { id: "bbbbb", nameA: "Ball 2", nameB: "Ball 3" },
      { id: "ccccc", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "ddddd", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "eeeee", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "fffff", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "ggggg", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "hhhhh", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "iiiii", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "jjjjj", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "kkkkk", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "lllll", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "mmmmm", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "nnnnn", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "ooooo", nameA: "Ball 3", nameB: "Ball 4" }
    ]
  }
}
