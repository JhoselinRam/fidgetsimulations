import ConfigSection from "../../../../ConfigSection/ConfigSection"
import type { BallConfigWidthValidation } from "../../../BallConfigComponents_types"
import AxisProperty from "../AxisProperty/AxisProperty"

function DynamicsControl({
  ballId,
  isValidSelection
}: BallConfigWidthValidation): JSX.Element {
  return (
    <>
      <ConfigSection.Section>
        <p>Position:</p>
        <AxisProperty
          className="ml-3"
          unit="m"
          step={0.03}
          isDisabled={!isValidSelection}
        />
        <p>Velocity:</p>
        <AxisProperty
          className="ml-3"
          unit="m/s"
          step={0.02}
          isDisabled={!isValidSelection}
        />
      </ConfigSection.Section>
    </>
  )
}

export default DynamicsControl
