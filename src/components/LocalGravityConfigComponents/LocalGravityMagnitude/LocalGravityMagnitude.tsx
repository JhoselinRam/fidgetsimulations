import useLocalGravityMagnitude from "../../../hooks/useLocalGravityMagnitude/useLocalGravityMagnitude"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { LocalGravityConfigProps } from "../LocalConfig_types"
import LocalGravityPolarControl from "./resources/LocalGravityPolarControl/LocalGravityPolarControl"
import LocalGravityRectangularControl from "./resources/LocalGravityRectangularControl/LocalGravityRectangularControl"

function LocalGravityMagnitude({ item }: LocalGravityConfigProps): JSX.Element {
  const { rectangularHooks, polarHooks } = useLocalGravityMagnitude(item)

  return (
    <ConfigSection title="Magnitude">
      <LocalGravityRectangularControl {...rectangularHooks} />
      <LocalGravityPolarControl {...polarHooks} />
    </ConfigSection>
  )
}

export default LocalGravityMagnitude
