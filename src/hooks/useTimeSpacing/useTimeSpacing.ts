import { useContext } from "react"
import type { UseTimeSpacing } from "./useTimeSpacing_types"
import { mainStateContext } from "../useMainState/useMainState"

function useTimeSpacing(): UseTimeSpacing {
  const { dispatch, mainState } = useContext(mainStateContext)

  function dtCallback(value: number): void {
    dispatch({ type: "time@dt", payload: { value } })
  }

  function delayCallback(value: number): void {
    dispatch({ type: "time@delay", payload: { value } })
  }

  return {
    dt: mainState.time.dt,
    dtCallback,
    delay: mainState.time.delay,
    delayCallback
  }
}

export default useTimeSpacing
