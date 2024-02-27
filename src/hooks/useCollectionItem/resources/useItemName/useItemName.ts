import { useEffect, useState } from "react"
import type { UseItemName } from "./useItemName_types"
import { isCollectionType } from "../../../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../../../useMainState/useMainState_types"

function useItemName(mainState: MainState, item: CollectionOrder): UseItemName {
  const [name, setName] = useState("")

  // ----------------- Gets the name ------------------------
  useEffect(() => {
    if (!isCollectionType(item.type)) return

    const collection = mainState[item.type].find(
      (element) => element.id === item.id
    )
    if (collection == null) return

    setName(collection.name)
  }, [item, mainState])

  return {
    name
  }
}

export default useItemName
