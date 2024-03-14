import ConfigSection from "../ConfigSection/ConfigSection"
import type { AxisConfigProps } from "./AxisConfig_types"
import ManualControl from "./resources/ManualControl/ManualControl"

function AxisConfig({ item }: AxisConfigProps): JSX.Element {
  return (
    <ConfigSection>
      <ManualControl />
    </ConfigSection>
  )
}

export default AxisConfig
