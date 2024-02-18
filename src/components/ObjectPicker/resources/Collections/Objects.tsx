import BallsIcon from "../../../Icons/BallsIcon"
import LinechartIcon from "../../../Icons/LinechartIcon/LinechartIcon"
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
// ------------------- Rope Chart ------------------------

export const ropeItem: ItemType = {
  id: "rope",
  title: "Rope",
  action: ropeAction,
  children: <LinechartIcon />
}

function ropeAction(): void {
  console.log("Rope Action")
}

// --------------------------------------------------------
// ------------------- Fabric Chart ------------------------

export const fabricItem: ItemType = {
  id: "fabric",
  title: "Fabric",
  action: fabricAction,
  children: <LinechartIcon />
}

function fabricAction(): void {
  console.log("Fabric Action")
}

// --------------------------------------------------------
