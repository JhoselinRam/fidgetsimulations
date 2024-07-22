import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { LinkLengthProps } from "./LinkLength_types"

function LinkLength({
  lengthInfo,
  lengthHooks,
  lengthClassName
}: LinkLengthProps): JSX.Element {
  return (
    <ConfigSection.Section className="!flex-row">
      <NumberInput
        unit="m"
        minValue={0}
        step={0.01}
        formatOptions={{ maximumFractionDigits: 3 }}
        className={lengthClassName}
        {...lengthHooks}
      >
        Size:
      </NumberInput>
      <Info placement="left">{lengthInfo}</Info>
    </ConfigSection.Section>
  )
}

export default LinkLength
