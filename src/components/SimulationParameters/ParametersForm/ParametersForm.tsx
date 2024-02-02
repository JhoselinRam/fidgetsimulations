import { useContext, useEffect, useRef, useState } from "react"
import Info from "../../Info/Info"
import Switch from "../../Switch/Switch"
import { toolBarContext } from "../../ToolBar/context"
import NumberInput from "../../NumberInput/NumberInput"

function ParametersForm(): JSX.Element {
  const { addElementInMenu } = useContext(toolBarContext)
  const simTimeRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (simTimeRef.current != null) simTimeRef.current.id = "simulationTimeInfo"
    addElementInMenu(simTimeRef)
  }, [simTimeRef, addElementInMenu])

  useEffect(() => {
    console.log(`Value: ${value}`)
  }, [value])

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
      <Switch className="w-fit">Continuous</Switch>
      <NumberInput value={value} onChange={setValue} unit="ms">
        Time:
      </NumberInput>
      <button
        onClick={() => {
          setValue((prev) => prev + 1)
        }}
      >
        Outer
      </button>
    </>
  )
}

export default ParametersForm
