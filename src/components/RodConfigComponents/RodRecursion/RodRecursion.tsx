import useRodRecursion from "../../../hooks/useRodeRecursion/useRodeRecursion"
import type { ConfigCollectionProps } from "../../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../../ConfigSection/ConfigSection"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"

function RodRecursion({ item }: ConfigCollectionProps): JSX.Element {
  const { recursionHooks } = useRodRecursion(item)

  return (
    <ConfigSection.Section className="-mb-2 !flex-row">
      <NumberInput
        inputClassName="w-10"
        minValue={1}
        formatOptions={{ maximumFractionDigits: 0 }}
        step={0.05}
        {...recursionHooks}
      >
        Recursion depth:
      </NumberInput>
      <Info>
        <p>
          The number of times that the ball distance will be adjusted at each
          time step.
        </p>
        <p className="mt-2">
          It is useful when the rod is used to connect multiple balls (like a
          rod or sheet).
        </p>
        <p className="mt-2">
          This parameter controls the stiffness of the link when applied to
          multiple balls, at the cost of a higher computing time.
        </p>
      </Info>
    </ConfigSection.Section>
  )
}

export default RodRecursion
