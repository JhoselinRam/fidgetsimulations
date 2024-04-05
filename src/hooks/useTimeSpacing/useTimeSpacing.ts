import { useContext } from "react"
import type { UseTimeSpacing } from "./useTimeSpacing_types"
import { mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"

function useTimeSpacing(): UseTimeSpacing {
  const { mainState } = useContext(mainStateContext)
  const dtProps = useBindState(
    { id: "dt", type: "simulationWindow" },
    mainState.time.dt,
    "time@dt"
  )
  const delayProps = useBindState(
    { id: "delay", type: "simulationWindow" },
    mainState.time.delay,
    "time@delay"
  )

  return {
    dt: dtProps.value,
    dtCallback: dtProps.changeValue,
    delay: delayProps.value,
    delayCallback: delayProps.changeValue
  }
}

export default useTimeSpacing
