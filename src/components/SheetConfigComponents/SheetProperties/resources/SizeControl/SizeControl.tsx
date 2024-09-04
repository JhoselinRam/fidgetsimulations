import AngleInput from "../../../../AngleInput/AngleInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import SizeHeader from "../SizeHeader/SizeHeader"
import type { SizeControlProps } from "./SizeControl_types"

function SizeControl({
  heightHooks,
  widthHooks,
  angleHooks
}: SizeControlProps): JSX.Element {
  return (
    <>
      <SizeHeader />
      <ConfigSection.Section>
        <NumberInput
          className="gap-3"
          unit="m"
          minValue={0}
          step={0.01}
          formatOptions={{ maximumFractionDigits: 4 }}
          {...widthHooks}
        >
          Width:
        </NumberInput>
        <NumberInput
          unit="m"
          minValue={0}
          step={0.01}
          formatOptions={{ maximumFractionDigits: 4 }}
          {...heightHooks}
        >
          Height:
        </NumberInput>
        <div className="flex flex-row gap-2">
          <NumberInput
            unit="deg"
            className="gap-[0.85rem]"
            formatOptions={{ maximumFractionDigits: 2 }}
            {...angleHooks}
          >
            Angle:
          </NumberInput>
          <AngleInput {...angleHooks} />
        </div>
      </ConfigSection.Section>
    </>
  )
}

export default SizeControl
