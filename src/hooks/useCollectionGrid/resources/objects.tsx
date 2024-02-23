import type { Dispatch } from "react"
import type { MainStateAction } from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import BallsIcon from "../../../components/Icons/BallsIcon/BallsIcon"
import RopeIcon from "../../../components/Icons/RopeIcon/RopeIcon"
import FabricIcon from "../../../components/Icons/FabricIcon/FabricIcon"

function getObjectsItems(dispatch: Dispatch<MainStateAction>): ItemType[] {
  // ------------------- Balls Chart ------------------------

  const ballsItem: ItemType = {
    id: "balls",
    title: "Balls",
    action: ballsAction,
    children: <BallsIcon />
  }

  function ballsAction(): void {
    console.log("Balls Action")
  }

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

  return [ballsItem, ropeItem, fabricItem]
}

export default getObjectsItems
