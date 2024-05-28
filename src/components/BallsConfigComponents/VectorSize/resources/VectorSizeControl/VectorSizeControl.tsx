import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { VectorSizeControlProps } from "./VectorSizeControl_types"

function VectorSizeControl({
  type,
  magnitudeHooks,
  maxSizeHooks
}: VectorSizeControlProps): JSX.Element {
  return (
    <ConfigSection.Section className="relative w-fit">
      <NumberInput
        className="gap-5"
        unit="px"
        minValue={0}
        formatOptions={{ maximumFractionDigits: 2 }}
        step={0.05}
        {...maxSizeHooks}
      >
        Max size:
      </NumberInput>
      <NumberInput
        unit={
          type === "velocity" ? (
            "m/s"
          ) : (
            <span>
              m/s<sup>2</sup>
            </span>
          )
        }
        minValue={0}
        step={0.01}
        formatOptions={{ maximumFractionDigits: 4 }}
        {...magnitudeHooks}
      >
        Magnitude:
      </NumberInput>
      <div className="pt-0 absolute top-1/2 -translate-y-1/2 left-full">
        <Info placement="left" crossOffset={55}>
          <p>
            Vectors with a magnitude equal to the <i>Magnitude</i> value will
            have a visual size equal to the <i>Max size</i> pixels. All other
            vectors will be resized accordingly.
          </p>
        </Info>
      </div>
    </ConfigSection.Section>
  )
}

export default VectorSizeControl
