import useBallDynamics from "../../../../../hooks/useBallDynamics/useBallDynamics"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import type { BallConfigWidthValidation } from "../../../BallConfigComponents_types"
import AxisProperty from "../AxisProperty/AxisProperty"
import FixedControl from "../FixedControl/FixedControl"

function DynamicsControl({
  ballId,
  isValidSelection
}: BallConfigWidthValidation): JSX.Element {
  const { positionHooks, velocityHooks, fixedHooks } = useBallDynamics(ballId)

  return (
    <>
      <FixedControl {...fixedHooks} />
      <ConfigSection.Section>
        <p>Position:</p>
        <AxisProperty
          className="ml-3"
          unit="m"
          step={0.03}
          isDisabled={!isValidSelection}
          formatOptions={{ maximumFractionDigits: 8 }}
          {...positionHooks}
        />
        <p>Velocity:</p>
        <AxisProperty
          className="ml-3"
          unit="m/s"
          step={0.02}
          isDisabled={!isValidSelection}
          formatOptions={{ maximumFractionDigits: 8 }}
          {...velocityHooks}
        />
      </ConfigSection.Section>
    </>
  )
}

export default DynamicsControl
