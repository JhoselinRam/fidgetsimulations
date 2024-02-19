import ContainerIcon from "../../../Icons/ContainerIcon/ContainerIcon"
import ObstacleIcon from "../../../Icons/ObstacleIcon/ObstacleIcon"
import RodIcon from "../../../Icons/RodIcon/RodIcon"
import SpringIcon from "../../../Icons/SpringIcon/SpringIcon"
import type { ItemType } from "../CollectionGrid/CollectionGrid_types"

// ------------------- Spring Chart ------------------------

export const springItem: ItemType = {
  id: "spring",
  title: "Spring",
  action: springAction,
  children: <SpringIcon />
}

function springAction(): void {
  console.log("Spring Action")
}

// --------------------------------------------------------
// -------------------- Rod Chart -------------------------

export const rodItem: ItemType = {
  id: "rod",
  title: "Rod",
  action: rodAction,
  children: <RodIcon />
}

function rodAction(): void {
  console.log("Rod Action")
}

// --------------------------------------------------------
// ----------------- Obstacle Chart -----------------------

export const obstacleItem: ItemType = {
  id: "obstacle",
  title: "Obstacle",
  action: obstacleAction,
  children: <ObstacleIcon />
}

function obstacleAction(): void {
  console.log("Obstacle Action")
}

// --------------------------------------------------------
// ----------------- Container Chart ----------------------

export const containerItem: ItemType = {
  id: "container",
  title: "Container",
  action: containerAction,
  children: <ContainerIcon />
}

function containerAction(): void {
  console.log("Container Action")
}

// --------------------------------------------------------
