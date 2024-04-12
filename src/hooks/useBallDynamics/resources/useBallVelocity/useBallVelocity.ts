import { useCallback, useContext, useEffect, useState } from "react"
import type {
  BallDynamicsPropertyHooks,
  BallPositionActionByAxis,
  BallPositionByAxis,
  BallVelocityActionByAxis,
  BallVelocityByAxis
} from "../../useBallDynamics_types"
import { mainStateContext } from "../../../useMainState/useMainState"
import type { MainState } from "../../../useMainState/useMainState_types"
import type { BallVelocityProps } from "./useBallVelocity_types"
import {
  ballPositionDefaultState,
  ballVelocityDefaultState
} from "../../../useMainState/resources/Balls/defaultState"

const velocityProp: BallVelocityByAxis = {
  x: "velocityX",
  y: "velocityY"
}
const positionProp: BallPositionByAxis = {
  x: "positionX",
  y: "positionY"
}
const lastPositionProp: BallPositionByAxis = {
  x: "lastPositionX",
  y: "lastPositionY"
}
const velocityAction: BallVelocityActionByAxis = {
  x: "balls@velocityX",
  y: "balls@velocityY"
}
const lastPositionAction: BallPositionActionByAxis = {
  x: "balls@lastPositionX",
  y: "balls@lastPositionY"
}

function useBallVelocity(
  ballId: string,
  axis: "x" | "y"
): BallDynamicsPropertyHooks {
  const { dispatch, mainState } = useContext(mainStateContext)
  const { ballPosition, ballVelocity, dt } = getBallVelocity(
    ballId,
    mainState,
    axis
  )
  const [velocity, setVelocity] = useState(ballVelocity)

  const changeVelocity = useCallback(
    (value: number) => {
      const payload: Record<string, unknown> = { id: ballId }
      payload[velocityProp[axis]] = value

      dispatch({ type: velocityAction[axis], payload })
      setVelocity(value)

      const newLastPosition = ballPosition - value * dt
      payload[lastPositionProp[axis]] = newLastPosition

      dispatch({ type: lastPositionAction[axis], payload })
    },
    [ballId, dispatch, axis, ballPosition, dt]
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
      ballVelocity: ballVelocityDefaultState.velocityX,
      ballPosition: ballPositionDefaultState.positionX,
      dt: 0.1
    }
  }

  return {
    ballVelocity: ballData[velocityProp[axis]],
    ballPosition: ballData[positionProp[axis]],
    dt: state.time.dt
  }
}
