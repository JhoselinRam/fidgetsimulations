import BallsIcon from "../../../Icons/BallsIcon/BallsIcon"
import type { ItemType } from "../CollectionGrid/CollectionGrid_types"

// ---------------- Local Gravity Chart -------------------

export const localGravityItem: ItemType = {
  id: "localGravity",
  title: ["Local", "Gravity"],
  action: localGravityAction,
  children: <BallsIcon />
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
  children: <BallsIcon />
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
  children: <BallsIcon />
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
  children: <BallsIcon />
}

function electricAction(): void {
  console.log(" Electric Action")
}

// --------------------------------------------------------
