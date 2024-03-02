import { useContext, useState } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseRenameCollection } from "./useRenameCollection_types"
import { mainStateContext } from "../useMainState/useMainState"
import useCollectionName from "./resources/useCollectionName/useCollectionName"

function useRenameCollection(item: CollectionOrder): UseRenameCollection {
  const { mainState } = useContext(mainStateContext)
  const { name } = useCollectionName(item, mainState)
  const [isEditing, setIsEditing] = useState(false)

  function onPressEdit(): void {
    setIsEditing(true)
  }

  return {
    name,
    isEditing,
    onPressEdit
  }
}

export default useRenameCollection
