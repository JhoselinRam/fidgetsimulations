import { useContext } from "react"
import type { UseBallNumber } from "./useBallNumber_types"
import { mainStateContext } from "../useMainState/useMainState"
import { createBallState } from "../useMainState/resources/Balls/defaultState"
import useBindState from "../useBindState/useBindState"

function useBallNumber(): UseBallNumber {
  const { mainState, dispatch } = useContext(mainStateContext)
  const ballCollision = mainState.balls[0].collision
  const ballTrajectoryEnable = mainState.balls[0].trajectoryEnable

  const collisionHooks = useBindState(
    { id: "balls", type: "balls" },
    ballCollision,
    "balls@collision"
  )
  const trajectoryHooks = useBindState(
    { id: "balls", type: "balls" },
    ballTrajectoryEnable,
    "balls@trajectoryEnable"
  )

  function addBall(): void {
    const newBallData = createBallState()
    newBallData.name = `Ball ${mainState.balls[0].data.length + 1}`

    dispatch({
      type: "balls@new",
      payload: newBallData as unknown as Record<string, unknown>
    })
  }

  return {
    number: mainState.balls[0].data.length,
    addBall,
    collisionHooks: {
      enableCollision: collisionHooks.value,
      changeCollision: collisionHooks.changeValue
    },
    trajectoryHooks: {
      enableTrajectory: trajectoryHooks.value,
      changeTrajectory: trajectoryHooks.changeValue
    }
  }
}

export default useBallNumber
