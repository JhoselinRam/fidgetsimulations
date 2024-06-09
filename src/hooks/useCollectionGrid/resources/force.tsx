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
import { createGravityState } from "../../useMainState/resources/Gravity/defaultState"
import { createDragState } from "../../useMainState/resources/Drag/defaultState"
import { createElectricState } from "../../useMainState/resources/Electric/defaultState"
import DampingIcon from "../../../components/Icons/DampingIcon/DampingIcon"
import { createDampingState } from "../../useMainState/resources/Damping/defaultState"

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
    const newGravity = createGravityState()
    newGravity.name = `Gravity ${state.gravity.length + 1}`

    dispatch({
      type: "gravity@new",
      payload: newGravity as unknown as Record<string, unknown>
    })
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
    const newDrag = createDragState()
    newDrag.name = `Drag ${state.drag.length + 1}`

    dispatch({
      type: "drag@new",
      payload: newDrag as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // ------------------ Electric Chart ----------------------

  const electricItem: ItemType = {
    id: "Electric",
    title: "Electric",
    action: electricAction,
    children: <ElectricIcon />
  }

  function electricAction(): void {
    const newElectric = createElectricState()
    newElectric.name = `Electric ${state.electric.length + 1}`

    dispatch({
      type: "electric@new",
      payload: newElectric as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // ------------------ Damping Chart -----------------------

  const dampingItem: ItemType = {
    id: "Damping",
    title: "Damping",
    action: dampingAction,
    children: <DampingIcon />
  }

  function dampingAction(): void {
    const newDamping = createDampingState()
    newDamping.name = `Damping ${state.damping.length + 1}`

    dispatch({
      type: "damping@new",
      payload: newDamping as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------

  return [localGravityItem, gravityItem, dragItem, electricItem, dampingItem]
}

export default getForceItems
