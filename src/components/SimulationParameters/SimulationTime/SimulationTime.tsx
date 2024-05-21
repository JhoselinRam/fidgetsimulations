import { useRef } from "react"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"
import Switch from "../../Switch/Switch"
import useSimulationTime from "../../../hooks/useSimulationTime/useSimulationTime"
import ConfigSection from "../../ConfigSection/ConfigSection"

function SimulationTime(): JSX.Element {
  const simTimeRef = useRef<HTMLDivElement>(null)
  const { switchValue, switchCallback, timeValue, timeCallback } =
    useSimulationTime(simTimeRef)
  return (
    <>
      <ConfigSection.Header className="text-black -mb-5">
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
      </ConfigSection.Header>
      <ConfigSection.Section className="pl-2 ">
        <Switch
          isSelected={switchValue}
          onChange={switchCallback}
          className="w-fit"
        >
          Continuous
        </Switch>
        <NumberInput
          unit="s"
          step={0.06}
          minValue={1}
          formatOptions={{ maximumFractionDigits: 1 }}
          value={timeValue}
          onChange={timeCallback}
          isDisabled={switchValue}
        >
          Time:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default SimulationTime
