import { useState, type Dispatch, useEffect } from "react"
import type {
  CollectionOrder,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseCollectionManual } from "./useCollectionManual_types"

function useCollectionManual(
  item: CollectionOrder,
  dispatch: Dispatch<MainStateAction>
): UseCollectionManual {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    dispatch({
      type: "graphic@manualEdit",
      payload: {
        ...item,
        manualEdit: isSelected
      }
    })
  }, [isSelected, dispatch, item])

  return {
    isSelected,
    onChange: setIsSelected
  }
}

export default useCollectionManual
