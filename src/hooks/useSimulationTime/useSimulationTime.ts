import { useContext, type RefObject, useEffect } from "react"
import type { UseSimulationTime } from "./useSimulationTime_types"
import { toolBarContext } from "../../components/ToolBar/context"
import { mainStateContext } from "../useMainState/useMainState"

function useSimulationTime(
  infoElement: RefObject<HTMLDivElement>
): UseSimulationTime {
  const { addElementInMenu } = useContext(toolBarContext)
  const { dispatch, mainState } = useContext(mainStateContext)

  useEffect(() => {
    if (infoElement.current != null)
      infoElement.current.id = "simulationTimeInfo"
    addElementInMenu(infoElement)
  }, [infoElement, addElementInMenu])

  function switchCallback(value: boolean): void {
    dispatch({ type: "time@continuous", payload: { value } })
  }

  function timeCallback(value: number): void {
    dispatch({ type: "time@time", payload: { value } })
  }

  return {
    switchValue: mainState.time.continuous,
    timeValue: mainState.time.time,
    switchCallback,
    timeCallback
  }
}

export default useSimulationTime
