import { useContext, type RefObject, useEffect } from "react"
import type { UseSimulationTime } from "./useSimulationTime_types"
import { toolBarContext } from "../../components/ToolBar/context"
import { mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"

function useSimulationTime(
  infoElement: RefObject<HTMLDivElement>
): UseSimulationTime {
  const { addElementInMenu } = useContext(toolBarContext)
  const { mainState } = useContext(mainStateContext)

  useEffect(() => {
    if (infoElement.current != null)
      infoElement.current.id = "simulationTimeInfo"
    addElementInMenu(infoElement)
  }, [infoElement, addElementInMenu])

  const switchProps = useBindState(
    { id: "continuous", type: "simulationWindow" },
    mainState.time.continuous,
    "time@continuous"
  )
  const timeProps = useBindState(
    { id: "time", type: "simulationWindow" },
    mainState.time.time,
    "time@time"
  )

  return {
    switchValue: switchProps.value,
    timeValue: timeProps.value,
    switchCallback: switchProps.changeValue,
    timeCallback: timeProps.changeValue
  }
}

export default useSimulationTime
