import useBindBallState from "../useBindBallState/useBindBallState"
import { ballTrajectoryDefaultState } from "../useMainState/resources/Balls/defaultState"
import type {
  BallTrajectoryDefaultProperties,
  BallTrajectoryGetter,
  BallTrajectoryKeys,
  UseBallTrajectory
} from "./useBallTrajectory_types"

const defaultProperties: BallTrajectoryDefaultProperties = {
  ...ballTrajectoryDefaultState
}

function useBallTrajectory(
  ballId: string,
  isValidSelection: boolean
): UseBallTrajectory {
  const matchColorProps = useBindBallState(
    ballId,
    getTrajectoryProperty("trajectoryMatchColor"),
    "balls@trajectoryMatchColor"
  )
  const colorProps = useBindBallState(
    ballId,
    getTrajectoryProperty("trajectoryColor"),
    "balls@trajectoryColor"
  )
  const opacityProps = useBindBallState(
    ballId,
    getTrajectoryProperty("trajectoryOpacity"),
    "balls@trajectoryOpacity"
  )
  const fadeProps = useBindBallState(
    ballId,
    getTrajectoryProperty("trajectoryFade"),
    "balls@trajectoryFade"
  )
  const lengthProps = useBindBallState(
    ballId,
    getTrajectoryProperty("trajectoryLength"),
    "balls@trajectoryLength"
  )

  function changeLength(value: number): void {
    lengthProps.changeValue(Math.round(value))
  }

  return {
    matchColorHooks: {
      isSelected: matchColorProps.value,
      onChange: matchColorProps.changeValue,
      isDisabled: !isValidSelection
    },
    aestheticHooks: {
      colorHooks: {
        value: colorProps.value,
        onChange: colorProps.changeValue,
        isDisabled: !isValidSelection || matchColorProps.value
      },
      opacityHooks: {
        value: opacityProps.value,
        onChange: opacityProps.changeValue,
        isDisabled: !isValidSelection
      },
      fadeHooks: {
        isSelected: fadeProps.value,
        onChange: fadeProps.changeValue,
        isDisabled: !isValidSelection
      }
    },
    lengthHooks: {
      value: lengthProps.value,
      onChange: changeLength,
      isDisabled: !isValidSelection
    }
  }
}

export default useBallTrajectory

function getTrajectoryProperty<T extends BallTrajectoryKeys>(
  key: T
): BallTrajectoryGetter<T> {
  return (ballId, state) => {
    const ballData = state.balls[0].data.find((ball) => ball.id === ballId)
    if (ballData == null) return defaultProperties[key]

    return ballData[key]
  }
}
