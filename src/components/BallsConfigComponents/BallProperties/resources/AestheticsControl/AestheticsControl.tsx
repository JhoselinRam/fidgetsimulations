import ColorInput from "../../../../ColorInput/ColorInput"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"

function AestheticsControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-4">Aesthetics:</ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          minValue={0.001}
          formatOptions={{ maximumFractionDigits: 3 }}
          step={0.01}
          unit="m"
        >
          Radius:
        </NumberInput>
        <ColorInput containerClassName="gap-5">Color:</ColorInput>
      </ConfigSection.Section>
    </>
  )
}

export default AestheticsControl
