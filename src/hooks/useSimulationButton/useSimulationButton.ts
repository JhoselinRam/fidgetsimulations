import { useContext } from "react"
import type { UseSimulationButton } from "./useSimulationButton_types"
import { mainStateContext } from "../useMainState/useMainState"
import { toolBarContext } from "../../components/ToolBar/context"

function useSimulationButton(): UseSimulationButton {
  const { mainState, dispatch } = useContext(mainStateContext)
  const { setShowConfig } = useContext(toolBarContext)
  const isRunning = mainState.simulation.run

  function toggleRun(): void {
    const newValue = !isRunning

    dispatch({
      type: "simulation@run",
      payload: { id: "simulation", run: newValue }
    })

    if (newValue) setShowConfig(false)
  }

  return {
    isRunning,
    toggleRun
  }
}

export default useSimulationButton
