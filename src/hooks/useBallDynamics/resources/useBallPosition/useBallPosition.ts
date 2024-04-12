import { useCallback, useContext, useEffect, useState } from "react"
import type {
  BallDynamicsPropertyHooks,
  BallPositionActionByAxis,
  BallPositionByAxis
} from "../../useBallDynamics_types"
import { mainStateContext } from "../../../useMainState/useMainState"
import type { MainState } from "../../../useMainState/useMainState_types"
import { ballPositionDefaultState } from "../../../useMainState/resources/Balls/defaultState"
import type { BallPositionProps } from "./useBallPosition_types"

const prop: BallPositionByAxis = { x: "positionX", y: "positionY" }
const secondaryProp: BallPositionByAxis = {
  x: "lastPositionX",
  y: "lastPositionY"
}
const mainAction: BallPositionActionByAxis = {
  x: "balls@positionX",
  y: "balls@positionY"
}
const secondaryAction: BallPositionActionByAxis = {
  x: "balls@lastPositionX",
  y: "balls@lastPositionY"
}

function useBallPosition(
  ballId: string,
  axis: "x" | "y"
): BallDynamicsPropertyHooks {
  const { dispatch, mainState } = useContext(mainStateContext)
  const { ballLastPosition, ballPosition } = getBallPosition(
    ballId,
    mainState,
    axis
  )
  const [position, setPosition] = useState(ballPosition)

  const changePosition = useCallback(
    (value: number) => {
      const payload: Record<string, unknown> = { id: ballId }
      payload[prop[axis]] = value

      dispatch({ type: mainAction[axis], payload })
      setPosition(value)

      const diff = value - ballPosition
      payload[secondaryProp[axis]] = ballLastPosition + diff
      dispatch({ type: secondaryAction[axis], payload })
    },
    [ballId, axis, dispatch, ballPosition, ballLastPosition]
  )

  useEffect(() => {
    changePosition(ballPosition)
  }, [ballPosition, changePosition])

  return {
    value: position,
    changeValue: changePosition
  }
}

export default useBallPosition

function getBallPosition(
  ballId: string,
  state: MainState,
  axis: "x" | "y"
): BallPositionProps {
  const ballData = state.balls[0].data.find((ball) => ball.id === ballId)

  if (ballData == null) {
    return {
      ballPosition: ballPositionDefaultState.positionX,
      ballLastPosition: ballPositionDefaultState.lastPositionX
    }
  }

  return {
    ballPosition: ballData[prop[axis]],
    ballLastPosition: ballData[secondaryProp[axis]]
  }
}
