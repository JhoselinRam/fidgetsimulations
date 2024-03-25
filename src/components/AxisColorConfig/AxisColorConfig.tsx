import useAxisColorConfig from "../../hooks/useAxisColorConfig/useAxisColorConfig"
import ConfigSection from "../ConfigSection/ConfigSection"
import type { AxisColorConfigProps } from "./AxisColorConfig_types"
import AxisColor from "./resources/AxisColor/AxisColor"
import BackgroundControl from "./resources/BackgroundControl/BackgroundColor"

function AxisColorConfig({ item }: AxisColorConfigProps): JSX.Element {
  const { axisHooks, backgroundHooks } = useAxisColorConfig(item)

  return (
    <ConfigSection title="Axis Color">
      <BackgroundControl {...backgroundHooks} />
      <AxisColor axis="x" hooks={axisHooks} />
      <AxisColor axis="y" hooks={axisHooks} />
    </ConfigSection>
  )
}

export default AxisColorConfig
