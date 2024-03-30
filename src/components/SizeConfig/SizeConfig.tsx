import useSizeConfig from "../../hooks/useSizeConfig/useSizeConfig"
import ConfigSection from "../ConfigSection/ConfigSection"
import NumberInput from "../NumberInput/NumberInput"
import type { SizeConfigProps } from "./SizeConfig_types"
import LinkSize from "./resources/LinkSize/LinkSize"

function SizeConfig({
  step,
  unit,
  item,
  valueWidth,
  valueHeight,
  valueRatioLock,
  actionWidth,
  actionHeight,
  actionRatioLock
}: SizeConfigProps): JSX.Element {
  const { heightHooks, ratioHooks, widthHooks } = useSizeConfig(
    item,
    valueWidth,
    valueHeight,
    valueRatioLock,
    actionWidth,
    actionHeight,
    actionRatioLock
  )

  return (
    <ConfigSection.Section className="relative w-fit pr-2">
      <NumberInput
        unit={unit}
        className="gap-3"
        step={step}
        minValue={0}
        formatOptions={{ maximumFractionDigits: 2 }}
        {...widthHooks}
      >
        width:
      </NumberInput>
      <NumberInput
        unit={unit}
        step={step}
        minValue={0}
        formatOptions={{ maximumFractionDigits: 2 }}
        {...heightHooks}
      >
        height:
      </NumberInput>
      <LinkSize {...ratioHooks} />
    </ConfigSection.Section>
  )
}

export default SizeConfig
