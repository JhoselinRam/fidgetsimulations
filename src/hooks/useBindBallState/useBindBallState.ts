import { useCallback, useContext, useEffect, useState } from "react"
import type {
  GetBallProperty,
  UseBindBallState
} from "./useBindBallState_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { BallActionType } from "../useMainState/resources/Balls/Balls_types"

function useBindBallState<T>(
  ballId: string,
  getProperty: GetBallProperty<T>,
  action: BallActionType
): UseBindBallState<T> {
  const { dispatch, mainState } = useContext(mainStateContext)
  const ballProperty = getProperty(ballId, mainState)
  const [property, setProperty] = useState(ballProperty)

  const changeValue = useCallback(
    (value: T) => {
      const propName = action.split("@")[1]
      const payload: Record<string, unknown> = { id: ballId }
      payload[propName] = value

      dispatch({ type: action, payload })
      setProperty(value)
    },
    [action, ballId, dispatch]
  )

  useEffect(() => {
    changeValue(ballProperty)
  }, [ballProperty, changeValue])

  return {
    value: property,
    changeValue
  }
}

export default useBindBallState
