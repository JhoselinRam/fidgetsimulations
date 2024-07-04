import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import Switch from "../../../../Switch/Switch"
import type { SizeControlProps } from "./SizeControl_types"

function SizeControl({
  type,
  normalizeHooks,
  sizeHooks
}: SizeControlProps): JSX.Element {
  return (
    <ConfigSection.Section className="!mt-7">
      <div className="flex flex-row gap-2">
        <Switch {...normalizeHooks}>Normalize:</Switch>
        <Info placement="left" crossOffset={30}>
          <p>If set, the vectors will be resized to facilitate readability.</p>
          <p className="mt-3">
            The change is only visual. It will not affect the actual vector
            values.
          </p>
        </Info>
      </div>
      <div className="relative w-fit flex flex-col gap-2">
        <NumberInput
          className="gap-5"
          unit="px"
          minValue={0}
          formatOptions={{ maximumFractionDigits: 2 }}
          step={0.05}
          {...sizeHooks.maxSizeHooks}
        >
          Max size:
        </NumberInput>
        <NumberInput
          unit={
            type === "velocityVector" ? (
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
          {...sizeHooks.magnitudeHooks}
        >
          Magnitude:
        </NumberInput>
        <div className="pt-0 absolute top-1/2 -translate-y-1/2 left-full">
          <Info placement="left" crossOffset={30}>
            <p>
              Vectors with a magnitude equal to the <i>Magnitude</i> value will
              have a visual size equal to the <i>Max size</i> pixels.
            </p>
            <p className="mt-2">
              All other vectors will be resized accordingly.
            </p>
          </Info>
        </div>
      </div>
    </ConfigSection.Section>
  )
}

export default SizeControl
