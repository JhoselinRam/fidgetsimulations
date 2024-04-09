import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { UseRenameCollection } from "./useRenameCollection_types"
import { isInCollection, mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"

function useRenameCollection(item: CollectionOrder): UseRenameCollection {
  const { mainState } = useContext(mainStateContext)
  const collectionName = getCollectionName(item, mainState)
  const nameProps = useBindState(item, collectionName, "collection@name")

  return {
    name: nameProps.value,
    changeName: nameProps.changeValue
  }
}

export default useRenameCollection

function getCollectionName(item: CollectionOrder, state: MainState): string {
  if (!isInCollection(item.id, item.type, state)) return ""

  const index = state[item.type].findIndex(
    (collection) => collection.id === item.id && collection.type === item.type
  )

  return state[item.type][index].name
}
