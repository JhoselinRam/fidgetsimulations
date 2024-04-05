import type { Dispatch } from "react"
import type {
  MainState,
  MainStateAction
} from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import LocalGravityIcon from "../../../components/Icons/LocalGravityIcon/LocalGravityIcon"
import GravityIcon from "../../../components/Icons/GravityIcon/GravityIcon"
import DragIcon from "../../../components/Icons/DragIcon/DragIcon"
import ElectricIcon from "../../../components/Icons/ElectricIcon/ElectricIcon"
import { createLocalGravityState } from "../../useMainState/resources/LocalGravity/defaultState"

function getForceItems(
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): ItemType[] {
  // ---------------- Local Gravity Chart -------------------

  const localGravityItem: ItemType = {
    id: "localGravity",
    title: ["Local", "Gravity"],
    action: localGravityAction,
    children: <LocalGravityIcon />
  }

  function localGravityAction(): void {
    const newLocalGravity = createLocalGravityState()
    newLocalGravity.name = `Local Gravity ${state.localGravity.length + 1}`

    dispatch({
      type: "localGravity@new",
      payload: newLocalGravity as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // ------------------- Gravity Chart ----------------------

  const gravityItem: ItemType = {
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

  const dragItem: ItemType = {
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

  const electricItem: ItemType = {
    id: "Electric",
    title: "Electric",
    action: electricAction,
    children: <ElectricIcon />
  }

  function electricAction(): void {
    console.log(" Electric Action")
  }

  // --------------------------------------------------------

  return [localGravityItem, gravityItem, dragItem, electricItem]
}

export default getForceItems
