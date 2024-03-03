import { useContext, useRef, useState } from "react"
import type { CollectionOrder } from "../useMainState/useMainState_types"
import type { UseRenameCollection } from "./useRenameCollection_types"
import { mainStateContext } from "../useMainState/useMainState"
import useCollectionName from "./resources/useCollectionName/useCollectionName"
import useRenameInput from "./resources/useRenameInput/useRenameInput"

function useRenameCollection(item: CollectionOrder): UseRenameCollection {
  const { mainState, dispatch } = useContext(mainStateContext)
  const { name } = useCollectionName(item, mainState)
  const [isEditing, setIsEditing] = useState(false)
  const initialName = useRef("")
  const renameInputProps = useRenameInput(
    item,
    dispatch,
    setIsEditing,
    initialName
  )
  renameInputProps.defaultValue = name

  function onPressEdit(): void {
    initialName.current = name
    setIsEditing(true)
  }

  return {
    name,
    isEditing,
    onPressEdit,
    renameInputProps
  }
}

export default useRenameCollection
