import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { LocalGravityRectangularControlProps } from "./LocalGravityRectangularControl_types"
import RectangularHeader from "./resources/RectangularHeader/RectangularHeader"

function LocalGravityRectangularControl({
  changeMagnitudeX,
  changeMagnitudeY,
  magnitudeX,
  magnitudeY
}: LocalGravityRectangularControlProps): JSX.Element {
  return (
    <>
      <RectangularHeader />
      <ConfigSection.Section>
        <NumberInput
          unit={
            <p className="w-fit">
              m/s<sup>2</sup>
            </p>
          }
          formatOptions={{ maximumFractionDigits: 2 }}
          step={0.05}
          value={magnitudeX}
          onChange={changeMagnitudeX}
        >
          x:{" "}
        </NumberInput>
        <NumberInput
          unit={
            <p className="w-fit">
              m/s<sup>2</sup>
            </p>
          }
          formatOptions={{ maximumFractionDigits: 2 }}
          step={0.05}
          value={magnitudeY}
          onChange={changeMagnitudeY}
        >
          y:{" "}
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default LocalGravityRectangularControl
