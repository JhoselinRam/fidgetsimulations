import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { UseDensityControl } from "./useDensityControl_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type { DragState } from "../useMainState/resources/Drag/Drag_types"
import { dragDensityDefaultState } from "../useMainState/resources/Drag/defaultState"
import useBindState from "../useBindState/useBindState"

function useDensityControl(item: CollectionOrder): UseDensityControl {
  const { mainState } = useContext(mainStateContext)
  const density = getDensity(item, mainState)
  const densityHooks = useBindState(item, density, "drag@density")

  return {
    value: densityHooks.value,
    onChange: densityHooks.changeValue
  }
}

export default useDensityControl

function getDensity(item: CollectionOrder, state: MainState): number {
  const collection = getCollection<DragState>(item, state, "drag")
  if (collection == null) return dragDensityDefaultState.density

  return collection.density
}
