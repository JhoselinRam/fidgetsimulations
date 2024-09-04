import type { Dispatch } from "react"
import type {
  MainState,
  MainStateAction
} from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import RopeIcon from "../../../components/Icons/RopeIcon/RopeIcon"
import FabricIcon from "../../../components/Icons/FabricIcon/FabricIcon"
import { createRopeState } from "../../useMainState/resources/Rope/defaultState"
import { createSheetState } from "../../useMainState/resources/Sheet/defaultState"

function getObjectsItems(
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): ItemType[] {
  // --------------------------------------------------------
  // ------------------- Rope Chart -------------------------

  const ropeItem: ItemType = {
    id: "rope",
    title: "Rope",
    action: ropeAction,
    children: <RopeIcon />
  }

  function ropeAction(): void {
    const newRope = createRopeState()
    newRope.name = `Rope ${state.rope.length + 1}`

    dispatch({
      type: "rope@new",
      payload: { ...newRope }
    })
  }

  // --------------------------------------------------------
  // ------------------ Fabric Chart ------------------------

  const fabricItem: ItemType = {
    id: "fabric",
    title: "Sheet",
    action: fabricAction,
    children: <FabricIcon />
  }

  function fabricAction(): void {
    const newSheet = createSheetState()
    newSheet.name = `Sheet ${state.sheet.length + 1}`

    dispatch({
      type: "sheet@new",
      payload: { ...newSheet }
    })
  }

  // --------------------------------------------------------

  return [ropeItem, fabricItem]
}

export default getObjectsItems
