import type { Dispatch } from "react"
import type { MainStateAction } from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import RopeIcon from "../../../components/Icons/RopeIcon/RopeIcon"
import FabricIcon from "../../../components/Icons/FabricIcon/FabricIcon"

function getObjectsItems(dispatch: Dispatch<MainStateAction>): ItemType[] {
  // --------------------------------------------------------
  // ------------------- Rope Chart -------------------------

  const ropeItem: ItemType = {
    id: "rope",
    title: "Rope",
    action: ropeAction,
    children: <RopeIcon />
  }

  function ropeAction(): void {
    console.log("Rope Action")
  }

  // --------------------------------------------------------
  // ------------------ Fabric Chart ------------------------

  const fabricItem: ItemType = {
    id: "fabric",
    title: "Fabric",
    action: fabricAction,
    children: <FabricIcon />
  }

  function fabricAction(): void {
    console.log("Fabric Action")
  }

  // --------------------------------------------------------

  return [ropeItem, fabricItem]
}

export default getObjectsItems
