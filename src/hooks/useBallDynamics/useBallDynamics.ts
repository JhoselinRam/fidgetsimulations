import useBallPosition from "./resources/useBallPosition/useBallPosition"
import useBallVelocity from "./resources/useBallVelocity/useBallVelocity"
import type { UseBallDynamics } from "./useBallDynamics_types"

function useBallDynamics(ballId: string): UseBallDynamics {
  const xPositionHooks = useBallPosition(ballId, "x")
  const yPositionHooks = useBallPosition(ballId, "y")
  const xVelocityHooks = useBallVelocity(ballId, "x")
  const yVelocityHooks = useBallVelocity(ballId, "y")

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
    }
  }
}

export default useBallDynamics
