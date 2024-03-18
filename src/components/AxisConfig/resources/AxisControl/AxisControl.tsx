import ConfigSection from "../../../ConfigSection/ConfigSection"
import NumberInput from "../../../NumberInput/NumberInput"
import CoupleControl from "../CoupleControl/CoupleControl"
import type { AxisControlProps } from "./AxisControl_types"

function AxisControl({ axis, axisHooks }: AxisControlProps): JSX.Element {
  return (
    <ConfigSection.Section className="relative w-fit pr-0.5">
      <div className="flex flex-row items-center gap-2">
        <i>{axis}:</i>
        <div className="flex flex-col gap-2">
          <NumberInput
            unit="m"
            value={axisHooks[axis].start}
            onChange={axisHooks[axis].changeStart}
            step={0.2}
          >
            From:
          </NumberInput>
          <NumberInput
            unit="m"
            className="gap-[1.6rem]"
            value={axisHooks[axis].end}
            onChange={axisHooks[axis].changeEnd}
            step={0.2}
          >
            To:
          </NumberInput>
        </div>
      </div>
      <CoupleControl axis={axis} {...axisHooks[axis].coupleHooks} />
    </ConfigSection.Section>
  )
}

export default AxisControl
