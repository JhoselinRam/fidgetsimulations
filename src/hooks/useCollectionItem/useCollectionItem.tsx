import { useContext, useEffect, useState } from "react"
import type {
  CollectionOrder,
  CollectionType
} from "../useMainState/useMainState_types"
import type { UseCollectionItem } from "./useCollectionItem_types"
import { mainStateContext } from "../useMainState/useMainState"
import { itemIcon } from "./resources/Icons/Icons"

function useCollectionItem(item: CollectionOrder): UseCollectionItem {
  const { mainState } = useContext(mainStateContext)
  const [name, setName] = useState("")
  const icon = itemIcon[item.type]

  // ----------------- Gets the name ------------------------
  useEffect(() => {
    if (!isCollectionType(item.type)) return

    const collection = mainState.graphElements[item.type].find(
      (element) => element.id === item.id
    )
    if (collection == null) return

    setName(collection.name)
  }, [item, mainState.graphElements])

  return {
    name,
    icon
  }
}
// --------------------------------------------------------

export default useCollectionItem

function isCollectionType(type: string): type is CollectionType {
  return (
    type === "simulationWindow" || type === "linechart" || type === "dataoutput"
  )
}
