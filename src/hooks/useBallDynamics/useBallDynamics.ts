import { ballFixedDefaultState } from "../useMainState/resources/Balls/defaultState"
import type { MainState } from "../useMainState/useMainState_types"
import useBallPosition from "./resources/useBallPosition/useBallPosition"
import useBallVelocity from "./resources/useBallVelocity/useBallVelocity"
import type { UseBallDynamics } from "./useBallDynamics_types"
import useBindBallState from "../useBindBallState/useBindBallState"

function useBallDynamics(ballId: string): UseBallDynamics {
  const xPositionHooks = useBallPosition(ballId, "x")
  const yPositionHooks = useBallPosition(ballId, "y")
  const xVelocityHooks = useBallVelocity(ballId, "x")
  const yVelocityHooks = useBallVelocity(ballId, "y")
  const fixedProps = useBindBallState(ballId, getBallFixedProp, "balls@fixed")

  return {
    positionHooks: {
      valueX: xPositionHooks.value,
      changeValueX: xPositionHooks.changeValue,
      valueY: yPositionHooks.value,
      changeValueY: yPositionHooks.changeValue
    },
    velocityHooks: {
      valueX: xVelocityHooks.value,
      changeValueX: xVelocityHooks.changeValue,
      valueY: yVelocityHooks.value,
      changeValueY: yVelocityHooks.changeValue
    },
    fixedHooks: {
      isSelected: fixedProps.value,
      onChange: fixedProps.changeValue
    }
  }
}

export default useBallDynamics

function getBallFixedProp(ballId: string, state: MainState): boolean {
  const ball = state.balls[0].data.find((element) => element.id === ballId)

  if (ball == null) return ballFixedDefaultState.fixed

  return ball.fixed
}
