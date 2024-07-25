import { useContext, useState } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  LinkBallListElement,
  UseLinkBallModal
} from "./useLinkBallModal_types"
import { mainStateContext } from "../useMainState/useMainState"

function useLinkBallModal(item: CollectionOrder): UseLinkBallModal {
  const { mainState } = useContext(mainStateContext)
  const [ballOptions, setBallOptions] = useState<LinkBallListElement[]>([])

  function refreshModal(): void {
    setBallOptions(getListElements(mainState))
  }

  return {
    refreshModal,
    listHooks: {
      ballOptions
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
