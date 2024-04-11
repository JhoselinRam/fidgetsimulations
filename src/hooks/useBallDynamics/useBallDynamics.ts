import { useContext, useState } from "react"
import type {
  BallSelectionItem,
  UseBallDynamics
} from "./useBallDynamics_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { MainState } from "../useMainState/useMainState_types"
import type { Key } from "react-aria-components"
import useBallRename from "./resources/useBallRename/useBallRename"

function useBallDynamics(): UseBallDynamics {
  const { mainState, dispatch } = useContext(mainStateContext)
  const items = getBallSelectionItems(mainState)
  const [ballId, setBallId] = useState(items[0].id)
  const renameHooks = useBallRename(ballId, mainState, dispatch)

  function changeId(id: Key): void {
    if (typeof id !== "string") return
    setBallId(id)
  }

  return {
    ballId,
    items,
    changeId,
    renameHooks
  }
}

export default useBallDynamics

function getBallSelectionItems(state: MainState): BallSelectionItem[] {
  return state.balls[0].data.map((ball) => {
    return { id: ball.id, name: ball.name }
  })
}
