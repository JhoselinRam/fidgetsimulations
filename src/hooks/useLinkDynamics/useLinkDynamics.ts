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
      { id: "zdcadfadf", nameA: "Ball 1", nameB: "Ball 2" },
      { id: "derthtyue", nameA: "Ball 2", nameB: "Ball 3" },
      { id: "assdbrym", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "assdbrym", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "difgld", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "d5h1rft5a5h", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "sdgrfdth8a", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "sdfh4da58f48de", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "sds5as5sw5", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "sddddddd", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "sdfgass78sd", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "<z56sv4+6>", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "55szdv85sd8578vas", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "zxd5vb4s8c89as", nameA: "Ball 3", nameB: "Ball 4" },
      { id: "zzxc7s", nameA: "Ball 3", nameB: "Ball 4" }
    ]
  }
}
