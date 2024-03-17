import ConfigSection from "../ConfigSection/ConfigSection"
import SimulationTime from "./SimulationTime/SimulationTime"
import TimeSpacing from "./TimeSpacing/TimeSpacing"

function SimulationParameters(): JSX.Element {
  return (
    <div className="px-2">
      <ConfigSection title="Parameters" dropDefault={true}>
        <SimulationTime />
        <TimeSpacing />
      </ConfigSection>
    </div>
  )
}

export default SimulationParameters
