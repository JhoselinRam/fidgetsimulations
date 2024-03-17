import ConfigSection from "../../../ConfigSection/ConfigSection"
import NumberInput from "../../../NumberInput/NumberInput"
import CoupleControl from "../CoupleControl/CoupleControl"
import type { AxisControlProps } from "./AxisControl_types"

function AxisControl({ axis }: AxisControlProps): JSX.Element {
  return (
    <ConfigSection.Section className="relative w-fit pr-0.5">
      <div className="flex flex-row items-center gap-2">
        <i>{axis}:</i>
        <div className="flex flex-col gap-2">
          <NumberInput unit="m">From:</NumberInput>
          <NumberInput unit="m" className="gap-[1.6rem]">
            To:
          </NumberInput>
        </div>
      </div>
      <CoupleControl />
    </ConfigSection.Section>
  )
}

export default AxisControl
