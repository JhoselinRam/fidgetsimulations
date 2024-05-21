import useVectorColorRange from "../../../../../hooks/useVectorColorRange/useVectorColorRange"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { ColorRangeControlProps } from "./ColorRangeControl_types"

function ColorRangeControl({ type }: ColorRangeControlProps): JSX.Element {
  const { maxMagnitudeHooks, minMagnitudeHooks } = useVectorColorRange(type)

  return (
    <ConfigSection.Section className="!mt-3 relative pr-3 w-fit">
      <NumberInput
        className="!gap-[0.65rem]"
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
        {...minMagnitudeHooks}
      >
        Min:
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
        {...maxMagnitudeHooks}
      >
        Max:
      </NumberInput>
      <div className="absolute pt-2 top-1/2 -translate-y-1/2 right-0 translate-x-full">
        <Info placement="left" crossOffset={50}>
          <p>Each {type} vector will be colored depending on its magnitude.</p>
          <p className="mt-2">
            Vectors with magnitude equal or less than the Min value will share
            color, the same will happen to vectors with magnitude equal or
            grater than the Max value.
          </p>
        </Info>
      </div>
    </ConfigSection.Section>
  )
}

export default ColorRangeControl
