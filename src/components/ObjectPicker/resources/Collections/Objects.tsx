import BallsIcon from "../../../Icons/BallsIcon/BallsIcon"
import FabricIcon from "../../../Icons/FabricIcon/FabricIcon"
import RopeIcon from "../../../Icons/RopeIcon/RopeIcon"
import type { ItemType } from "../CollectionGrid/CollectionGrid_types"

// ------------------- Balls Chart ------------------------

export const ballsItem: ItemType = {
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

export const ropeItem: ItemType = {
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

export const fabricItem: ItemType = {
  id: "fabric",
  title: "Fabric",
  action: fabricAction,
  children: <FabricIcon />
}

function fabricAction(): void {
  console.log("Fabric Action")
}

// --------------------------------------------------------
