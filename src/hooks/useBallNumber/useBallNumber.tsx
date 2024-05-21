import { useContext } from "react"
import type { UseBallNumber } from "./useBallNumber_types"
import { mainStateContext } from "../useMainState/useMainState"
import { createBallState } from "../useMainState/resources/Balls/defaultState"
import useBindState from "../useBindState/useBindState"

function useBallNumber(): UseBallNumber {
  const { mainState, dispatch } = useContext(mainStateContext)
  const ballCollision = mainState.balls[0].collision
  const velocityVector = mainState.velocityVector.enable
  const accelerationVector = mainState.accelerationVector.enable
  const collisionHooks = useBindState(
    { id: "balls", type: "balls" },
    ballCollision,
    "balls@collision"
  )
  const velocityVectorHooks = useBindState(
    { id: "velocityVector", type: "balls" },
    velocityVector,
    "vector@enable"
  )
  const accelerationVectorHooks = useBindState(
    { id: "accelerationVector", type: "balls" },
    accelerationVector,
    "vector@enable"
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
    velocityVectorHooks: {
      isSelected: velocityVectorHooks.value,
      onChange: velocityVectorHooks.changeValue
    },
    accelerationVectorHooks: {
      isSelected: accelerationVectorHooks.value,
      onChange: accelerationVectorHooks.changeValue
    }
  }
}

export default useBallNumber
