import toCapitalize from "../../../auxiliary/toCapitalize"
import useVectorColor from "../../../hooks/useVectorColor/useVectorColor"
import ConfigSection from "../../ConfigSection/ConfigSection"
import RadioInput from "../../RadioInput/RadioInput"
import type { VectorConfigType } from "../BallConfigComponents_types"
import DynamicControl from "./resources/DynamicControl/DynamicControl"
import StaticControl from "./resources/StaticControl/StaticControl"

function VectorColor({ type }: VectorConfigType): JSX.Element {
  const { colorModeHooks } = useVectorColor(type)

  return (
    <ConfigSection title={`${toCapitalize(type)} Vector Color`}>
      <RadioInput>
        <StaticControl />
        <DynamicControl type={type} />
      </RadioInput>
    </ConfigSection>
  )
}

export default VectorColor
