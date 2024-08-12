import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import AngleControl from "../AngleControl/AngleControl"
import NodesControl from "../NodesControl/NodesControl"
import ShapeHeader from "../ShapeHeader/ShapeHeader"

function ShapeControl(): JSX.Element {
  return (
    <>
      <ShapeHeader />
      <ConfigSection.Section>
        <NumberInput
          unit="m"
          minValue={0}
          formatOptions={{ maximumFractionDigits: 4 }}
          step={0.01}
        >
          Length:
        </NumberInput>
        <AngleControl />
        <NodesControl />
      </ConfigSection.Section>
    </>
  )
}

export default ShapeControl
