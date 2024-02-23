import type { Dispatch } from "react"
import type { MainStateAction } from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import SpringIcon from "../../../components/Icons/SpringIcon/SpringIcon"
import RodIcon from "../../../components/Icons/RodIcon/RodIcon"
import ObstacleIcon from "../../../components/Icons/ObstacleIcon/ObstacleIcon"
import ContainerIcon from "../../../components/Icons/ContainerIcon/ContainerIcon"

function getConstrainsItems(dispatch: Dispatch<MainStateAction>): ItemType[] {
  // ------------------- Spring Chart ------------------------

  const springItem: ItemType = {
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

  const rodItem: ItemType = {
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

  const obstacleItem: ItemType = {
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

  const containerItem: ItemType = {
    id: "container",
    title: "Container",
    action: containerAction,
    children: <ContainerIcon />
  }

  function containerAction(): void {
    console.log("Container Action")
  }

  // --------------------------------------------------------

  return [springItem, rodItem, obstacleItem, containerItem]
}

export default getConstrainsItems
