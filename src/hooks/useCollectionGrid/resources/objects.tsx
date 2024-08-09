import type { Dispatch } from "react"
import type {
  MainState,
  MainStateAction
} from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import RopeIcon from "../../../components/Icons/RopeIcon/RopeIcon"
import FabricIcon from "../../../components/Icons/FabricIcon/FabricIcon"
import { createRopeState } from "../../useMainState/resources/Rope/defaultState"
import { createRodState } from "../../useMainState/resources/Rod/defaultState"
import type { BallData } from "../../useMainState/resources/Balls/Balls_types"
import { createBallState } from "../../useMainState/resources/Balls/defaultState"

function getObjectsItems(
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): ItemType[] {
  // --------------------------------------------------------
  // ------------------- Rope Chart -------------------------

  const ropeItem: ItemType = {
    id: "rope",
    title: "Rope",
    action: ropeAction,
    children: <RopeIcon />
  }

  function ropeAction(): void {
    const newRod = createRodState()
    newRod.name = `Rope ${state.rope.length + 1} link rod`

    const newRope = createRopeState()
    newRope.name = `Rope ${state.rope.length + 1}`
    newRope.rod = newRod.id

    const nodeDistance = newRope.length / (newRope.nodes - 1)

    const newBalls: BallData[] = []
    for (let i = 0; i < newRope.nodes; i++) {
      const newBall = createBallState()
      newBall.name = `Rope ${state.rope.length + 1} ball ${newBalls.length + 1}`
      newBall.positionX = newRope.positionX + i * nodeDistance
      newBall.positionY = newRope.positionY
      newBall.radius = import.meta.env.VITE_ROPE_BALL_RADIUS

      newBalls.push(newBall)
      newRope.balls.push(newBall.id)
    }
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
