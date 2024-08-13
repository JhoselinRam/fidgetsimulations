import ConfigSection from "../../ConfigSection/ConfigSection"
import NumberInput from "../../NumberInput/NumberInput"
import type { RopePropertiesProps } from "./RopeProperties_types"
import AngleControl from "./resources/AngleControl/AngleControl"
import NodesControl from "./resources/NodesControl/NodesControl"
import RecursionControl from "./resources/RecursionControl/RecursionControl"
import ShapeHeader from "./resources/ShapeHeader/ShapeHeader"

function RopeProperties({
  angleHooks,
  lengthHooks,
  nodesHooks,
  recursionHooks
}: RopePropertiesProps): JSX.Element {
  return (
    <ConfigSection title="Properties">
      <ShapeHeader />
      <ConfigSection.Section>
        <NumberInput
          unit="m"
          minValue={0}
          formatOptions={{ maximumFractionDigits: 4 }}
          step={0.01}
          {...lengthHooks}
        >
          Length:
        </NumberInput>
        <AngleControl angleHooks={angleHooks} />
        <NodesControl nodesHooks={nodesHooks} />
      </ConfigSection.Section>
      <RecursionControl recursionHooks={recursionHooks} />
    </ConfigSection>
  )
}

export default RopeProperties
