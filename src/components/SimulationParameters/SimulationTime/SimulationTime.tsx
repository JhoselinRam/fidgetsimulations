import { useContext, useEffect, useRef } from "react"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"
import Switch from "../../Switch/Switch"
import { toolBarContext } from "../../ToolBar/context"

function SimulationTime(): JSX.Element {
  const { addElementInMenu } = useContext(toolBarContext)
  const simTimeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (simTimeRef.current != null) simTimeRef.current.id = "simulationTimeInfo"
    addElementInMenu(simTimeRef)
  }, [simTimeRef, addElementInMenu])

  return (
    <>
      <span className="flex flex-row gap-2 content-center">
        Simulation time:
        <Info placement="right" crossOffset={40} ref={simTimeRef}>
          <p>
            The amount of time to be simulated. If set to
            &quot;continuous&quot;, the simulation will run indefinitely
          </p>
          <p className="mt-3">
            The time that is being simulated does not correspond to the actual
            time in the real world.
          </p>
        </Info>
      </span>
      <div className="px-2 flex flex-col gap-2">
        <Switch className="w-fit">Continuous</Switch>
        <NumberInput unit="s" step={0.1}>
          Time:
        </NumberInput>
      </div>
    </>
  )
}

export default SimulationTime
