import { useContext, useEffect, useState } from "react"
import type { BallSelectionItem, UseBallSelect } from "./useBallSelect_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { MainState } from "../useMainState/useMainState_types"
import type { Key } from "react-aria-components"

function useBallSelect(): UseBallSelect {
  const { mainState } = useContext(mainStateContext)
  const items = getBallSelectionItems(mainState)
  const [ballId, setBallId] = useState("")
  const [isValidSelection, setIsValidSelection] = useState(true)
  const ids = items.map((item) => item.id)
  const stringIds = JSON.stringify(ids)

  function changeId(id: Key): void {
    if (typeof id !== "string") return
    setBallId(id)
  }

  useEffect(() => {
    if (ids.find((id) => id === ballId) != null) return

    if (ids.length > 0) {
      setBallId(ids[0])
      setIsValidSelection(true)
      return
    }

    setIsValidSelection(false)
  }, [ids, stringIds, ballId])

  return {
    ballId,
    items,
    changeId,
    isValidSelection
  }
}

export default useBallSelect

function getBallSelectionItems(state: MainState): BallSelectionItem[] {
  return state.balls[0].data.map((ball) => {
    return { id: ball.id, name: ball.name }
  })
}
