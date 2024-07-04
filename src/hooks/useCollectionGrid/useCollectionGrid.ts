import { useContext } from "react"
import type { UseCollectionGrid } from "./useCollectionGrid_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { ItemsBySelection } from "../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import getVisualizationItems from "./resources/visualization"
import getConstrainsItems from "./resources/constrains"
import getObjectsItems from "./resources/objects"
import getForceItems from "./resources/force"

function useCollectionGrid(): UseCollectionGrid {
  const { mainState, dispatch } = useContext(mainStateContext)
  const visualization = getVisualizationItems(mainState, dispatch)
  const constrains = getConstrainsItems(mainState, dispatch)
  const objects = getObjectsItems(dispatch)
  const force = getForceItems(mainState, dispatch)

  const collectionItems: ItemsBySelection = {
    visualization,
    constrains,
    objects,
    force
  }

  return { collectionItems }
}

export default useCollectionGrid
