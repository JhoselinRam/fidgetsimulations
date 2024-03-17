import ConfigSection from "../ConfigSection/ConfigSection"
import type { AxisConfigProps } from "./AxisConfig_types"
import AxisControl from "./resources/AxisControl/AxisControl"
import LinkControl from "./resources/LinkControl/LinkControl"
import ManualControl from "./resources/ManualControl/ManualControl"

function AxisConfig({ item }: AxisConfigProps): JSX.Element {
  return (
    <ConfigSection title="Axis Domain">
      <ManualControl />
      <div className="relative mb-2">
        <AxisControl axis="x" />
        <LinkControl />
      </div>
      <AxisControl axis="y" />
    </ConfigSection>
  )
}

export default AxisConfig
