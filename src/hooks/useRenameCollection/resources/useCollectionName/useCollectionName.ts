import { useEffect, useState } from "react"
import type { UseCollectionName } from "./useCollectionName_types"
import type {
  CollectionOrder,
  MainState
} from "../../../useMainState/useMainState_types"
import { isInCollection } from "../../../useMainState/useMainState"

function useCollectionName(
  item: CollectionOrder,
  state: MainState
): UseCollectionName {
  const [name, setName] = useState("")

  useEffect(() => {
    if (!isInCollection(item.id, item.type, state)) return

    const index = state[item.type].findIndex(
      (collection) => collection.id === item.id && collection.type === item.type
    )
    const collectionName = state[item.type][index].name

    setName(collectionName)
  }, [item, state])

  return {
    name
  }
}

export default useCollectionName
