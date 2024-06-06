import { useCallback, useContext, useEffect, useState } from "react"
import type {
  BallDynamicsPropertyHooks,
  BallVelocityActionByAxis,
  BallVelocityByAxis
} from "../../useBallDynamics_types"
import { mainStateContext } from "../../../useMainState/useMainState"
import type { MainState } from "../../../useMainState/useMainState_types"
import type { BallVelocityProps } from "./useBallVelocity_types"
import { ballVelocityDefaultState } from "../../../useMainState/resources/Balls/defaultState"

const velocityProp: BallVelocityByAxis = {
  x: "velocityX",
  y: "velocityY"
}

const velocityAction: BallVelocityActionByAxis = {
  x: "balls@velocityX",
  y: "balls@velocityY"
}

function useBallVelocity(
  ballId: string,
  axis: "x" | "y"
): BallDynamicsPropertyHooks {
  const { dispatch, mainState } = useContext(mainStateContext)
  const { ballVelocity } = getBallVelocity(ballId, mainState, axis)
  const [velocity, setVelocity] = useState(ballVelocity)

  const changeVelocity = useCallback(
    (value: number) => {
      const payload: Record<string, unknown> = { id: ballId }
      payload[velocityProp[axis]] = value

      dispatch({ type: velocityAction[axis], payload })
      setVelocity(value)
    },
    [ballId, dispatch, axis]
  )

  useEffect(() => {
    changeVelocity(ballVelocity)
  }, [ballVelocity, changeVelocity])

  return {
    value: velocity,
    changeValue: changeVelocity
  }
}

export default useBallVelocity

function getBallVelocity(
  ballId: string,
  state: MainState,
  axis: "x" | "y"
): BallVelocityProps {
  const ballData = state.balls[0].data.find((ball) => ball.id === ballId)

  if (ballData == null) {
    return {
      ballVelocity: ballVelocityDefaultState.velocityX
    }
  }

  return {
    ballVelocity: ballData[velocityProp[axis]]
  }
}
