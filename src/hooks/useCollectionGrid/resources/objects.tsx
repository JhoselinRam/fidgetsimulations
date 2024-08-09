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
    newRod.name = `Link of rope ${state.rope.length + 1}`

    const newRope = createRopeState()
    newRope.name = `Rope ${state.rope.length + 1}`
    newRope.rod = newRod.id

    const nodeDistance = newRope.length / (newRope.nodes - 1)
    newRod.length = nodeDistance

    const newBalls: BallData[] = []
    for (let i = 0; i < newRope.nodes; i++) {
      const newBall = createBallState()
      newBall.name = `Ball ${newBalls.length + 1} of rope ${
        state.rope.length + 1
      }`
      newBall.positionX = newRope.positionX + i * nodeDistance
      newBall.positionY = newRope.positionY
      newBall.radius = import.meta.env.VITE_ROPE_BALL_RADIUS

      newBalls.push(newBall)
      newRope.balls.push(newBall.id)
    }

    dispatch({
      type: "rod@new",
      payload: newRod as unknown as Record<string, unknown>
    })

    dispatch({
      type: "rope@new",
      payload: newRope as unknown as Record<string, unknown>
    })

    newBalls.forEach((ball) => {
      dispatch({
        type: "balls@new",
        payload: { ...ball }
      })
    })
  }

  // --------------------------------------------------------
  // ------------------ Fabric Chart ------------------------

  const fabricItem: ItemType = {
    id: "fabric",
    title: "Sheet",
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
