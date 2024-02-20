import DragIcon from "../../../Icons/DragIcon/DragIcon"
import ElectricIcon from "../../../Icons/ElectricIcon/ElectricIcon"
import GravityIcon from "../../../Icons/GravityIcon/GravityIcon"
import LocalGravityIcon from "../../../Icons/LocalGravityIcon/LocalGravityIcon"
import type { ItemType } from "../CollectionGrid/CollectionGrid_types"

// ---------------- Local Gravity Chart -------------------

export const localGravityItem: ItemType = {
  id: "localGravity",
  title: ["Local", "Gravity"],
  action: localGravityAction,
  children: <LocalGravityIcon />
}

function localGravityAction(): void {
  console.log("Local Gravity Action")
}

// --------------------------------------------------------
// ------------------- Gravity Chart ----------------------

export const gravityItem: ItemType = {
  id: "Gravity",
  title: "Gravity",
  action: gravityAction,
  children: <GravityIcon />
}

function gravityAction(): void {
  console.log(" Gravity Action")
}

// --------------------------------------------------------
// ------------------- Drag Chart ----------------------

export const dragItem: ItemType = {
  id: "Drag",
  title: "Drag",
  action: dragAction,
  children: <DragIcon />
}

function dragAction(): void {
  console.log(" Drag Action")
}

// --------------------------------------------------------
// ------------------- Electric Chart ----------------------

export const electricItem: ItemType = {
  id: "Electric",
  title: "Electric",
  action: electricAction,
  children: <ElectricIcon />
}

function electricAction(): void {
  console.log(" Electric Action")
}

// --------------------------------------------------------
