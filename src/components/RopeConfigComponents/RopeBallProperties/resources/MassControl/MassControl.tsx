import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"

function MassControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Header>
        <span>Mass and Charge:</span>
        <Info placement="top">
          <p>This corresponds to the total mass and charge of the rope.</p>
          <p className="mt-2">
            Each ball will be assigned the corresponding fraction of these
            properties.
          </p>
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          className="gap-5"
          unit="kg"
          minValue={import.meta.env.VITE_BALL_MIN_MASS}
          formatOptions={{ maximumFractionDigits: 8 }}
          step={0.01}
        >
          Mass:
        </NumberInput>
        <NumberInput
          unit="C"
          formatOptions={{ maximumFractionDigits: 8 }}
          step={0.0001}
        >
          Charge:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default MassControl
