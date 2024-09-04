import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import NumberInput from "../../../../NumberInput/NumberInput"
import type { RecursionControlProps } from "./RecursionControl_types"

function RecursionControl(recursionHooks: RecursionControlProps): JSX.Element {
  return (
    <>
      <ConfigSection.Header className="mt-5">
        <span>Recursion depth:</span>
        <Info>
          <p>
            The number of times that the balls distance will be adjusted at each
            time step.
          </p>
          <p className="mt-2">
            This parameter controls the stiffness of the sheet, at the cost of a
            higher computing time.
          </p>
        </Info>
      </ConfigSection.Header>
      <ConfigSection.Section>
        <NumberInput
          minValue={1}
          formatOptions={{ maximumFractionDigits: 0 }}
          step={0.05}
          {...recursionHooks}
        >
          Depth:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default RecursionControl
