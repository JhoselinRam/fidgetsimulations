import ConfigSection from "../ConfigSection/ConfigSection"
import type { AxisConfigProps } from "./AxisConfig_types"
import AxisControl from "./resources/AxisControl/AxisControl"
import ManualControl from "./resources/ManualControl/ManualControl"

function AxisConfig({ item }: AxisConfigProps): JSX.Element {
  return (
    <ConfigSection>
      <ManualControl />
      <AxisControl axis="x" />
      <AxisControl axis="y" />
    </ConfigSection>
  )
}

export default AxisConfig
