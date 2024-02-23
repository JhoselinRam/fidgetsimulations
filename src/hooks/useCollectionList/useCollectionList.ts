import { useContext } from "react"
import type { UseCollectionList } from "./useCollectionList_types"
import { mainStateContext } from "../useMainState/useMainState"

function useCollectionList(): UseCollectionList {
  const { mainState } = useContext(mainStateContext)
  const items = mainState.order.slice().reverse()

  return {
    items
  }
}

export default useCollectionList
