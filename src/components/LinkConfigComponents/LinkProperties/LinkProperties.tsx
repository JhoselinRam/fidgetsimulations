import useLinkProperties from "../../../hooks/useLinkProperties/useLinkProperties"
import ColorInput from "../../ColorInput/ColorInput"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import NumberInput from "../../NumberInput/NumberInput"

function LinkProperties({ item }: ConfigCollectionProps): JSX.Element {
  const { colorHooks, opacityHooks } = useLinkProperties(item)

  return (
    <ConfigSection title="Properties">
      <ConfigSection.Header>Aesthetics:</ConfigSection.Header>
      <ConfigSection.Section className="!mt-3">
        <ColorInput containerClassName="gap-[1.38rem]" {...colorHooks}>
          Color:
        </ColorInput>
        <NumberInput
          minValue={0}
          maxValue={1}
          formatOptions={{ maximumFractionDigits: 2 }}
          step={0.008}
          {...opacityHooks}
        >
          Opacity:
        </NumberInput>
      </ConfigSection.Section>
    </ConfigSection>
  )
}

export default LinkProperties
