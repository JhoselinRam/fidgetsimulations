import useBindBallState from "../useBindBallState/useBindBallState"
import {
  ballChargeDefaultState,
  ballColorDefaultState,
  ballMassDefaultState,
  ballRadiusDefaultState
} from "../useMainState/resources/Balls/defaultState"
import type {
  BallDefaultProperties,
  BallPropertiesKeys,
  BallPropertyGetter,
  UseBallProperties
} from "./useBallProperties_types"

const defaultProperties: BallDefaultProperties = {
  ...ballMassDefaultState,
  ...ballChargeDefaultState,
  ...ballColorDefaultState,
  ...ballRadiusDefaultState
}

function useBallProperties(ballId: string): UseBallProperties {
  const massHooks = useBindBallState(
    ballId,
    getBallProperty("mass"),
    "balls@mass"
  )
  const chargeHooks = useBindBallState(
    ballId,
    getBallProperty("charge"),
    "balls@charge"
  )
  const colorHooks = useBindBallState(
    ballId,
    getBallProperty("color"),
    "balls@color"
  )
  const radiusHooks = useBindBallState(
    ballId,
    getBallProperty("radius"),
    "balls@radius"
  )

  return {
    massAndChargeHooks: {
      mass: massHooks.value,
      changeMass: massHooks.changeValue,
      charge: chargeHooks.value,
      changeCharge: chargeHooks.changeValue
    },
    aestheticsHooks: {
      color: colorHooks.value,
      changeColor: colorHooks.changeValue,
      radius: radiusHooks.value,
      changeRadius: radiusHooks.changeValue
    }
  }
}

export default useBallProperties

function getBallProperty<T extends BallPropertiesKeys>(
  key: T
): BallPropertyGetter<T> {
  return (ballId, state) => {
    const ballData = state.balls[0].data.find((ball) => ball.id === ballId)
    if (ballData == null) return defaultProperties[key]

    return ballData[key]
  }
}
