import AngleInput from "../../../../AngleInput/AngleInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { LocalGravityPolarControlProps } from "./LocalGravityPolarControl_type"

function LocalGravityPolarControl({
  angle,
  changeAngle,
  changeMagnitude,
  magnitude
}: LocalGravityPolarControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-5">Polar:</ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          unit={
            <p className="w-fit">
              m/s<sup>2</sup>
            </p>
          }
          formatOptions={{ maximumFractionDigits: 2 }}
          minValue={0}
          step={0.05}
          value={magnitude}
          onChange={changeMagnitude}
        >
          Magnitude:
        </NumberInput>
        <div className="flex flex-row gap-2">
          <NumberInput
            className="gap-[2.5rem]"
            unit="deg"
            formatOptions={{ maximumFractionDigits: 2 }}
            value={angle}
            onChange={changeAngle}
          >
            Angle:
          </NumberInput>
          <AngleInput />
        </div>
      </ConfigSection.Section>
    </>
  )
}

export default LocalGravityPolarControl
