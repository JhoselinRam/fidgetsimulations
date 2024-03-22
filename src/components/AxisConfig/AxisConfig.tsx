import useAxisConfig from "../../hooks/useAxisConfig/useAxisConfig"
import ConfigSection from "../ConfigSection/ConfigSection"
import type { AxisConfigProps } from "./AxisConfig_types"
import AxisControl from "./resources/AxisControl/AxisControl"
import LinkControl from "./resources/LinkControl/LinkControl"
import ManualControl from "./resources/ManualControl/ManualControl"

function AxisConfig({ item }: AxisConfigProps): JSX.Element {
  const { axisHooks, linkHooks } = useAxisConfig(item)

  return (
    <ConfigSection title="Axis Domain">
      <ManualControl />
      <div className="relative mb-2">
        <AxisControl axis="x" axisHooks={axisHooks} />
        <LinkControl {...linkHooks} />
      </div>
      <AxisControl axis="y" axisHooks={axisHooks} />
    </ConfigSection>
  )
}

export default AxisConfig
