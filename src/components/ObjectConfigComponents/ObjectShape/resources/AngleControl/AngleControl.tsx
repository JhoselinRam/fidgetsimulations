import AngleInput from "../../../../AngleInput/AngleInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { AngleControlProps } from "./AngleControl_types"

function AngleControl(hooks: AngleControlProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <div className="flex flex-row items-center gap-4">
        <NumberInput
          {...hooks}
          unit="deg"
          formatOptions={{ maximumFractionDigits: 2 }}
        >
          Angle:
        </NumberInput>
        <AngleInput {...hooks} />
      </div>
    </ConfigSection.Section>
  )
}

export default AngleControl
