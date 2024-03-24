import ConfigSection from "../ConfigSection/ConfigSection"
import type { ColorGraphConfigProps } from "./ColorGraphConfig_types"
import BackgroundControl from "./resources/BackgroundControl/BackgroundControl"

function ColorGraphConfig({ item }: ColorGraphConfigProps): JSX.Element {
  return (
    <ConfigSection title="Color">
      <BackgroundControl />
    </ConfigSection>
  )
}

export default ColorGraphConfig
