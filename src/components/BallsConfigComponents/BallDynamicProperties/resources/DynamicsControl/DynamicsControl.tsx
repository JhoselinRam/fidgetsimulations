import ConfigSection from "../../../../ConfigSection/ConfigSection"
import AxisProperty from "../AxisProperty/AxisProperty"

function DynamicsControl(): JSX.Element {
  return (
    <>
      <ConfigSection.Section>
        <p>Position:</p>
        <AxisProperty className="ml-3" unit="m" step={0.03} />
        <p>Velocity:</p>
        <AxisProperty className="ml-3" unit="m/s" step={0.02} />
        <p>Acceleration:</p>
        <AxisProperty
          className="ml-3"
          unit={
            <p>
              m/s<sup>2</sup>
            </p>
          }
          step={0.02}
        />
      </ConfigSection.Section>
    </>
  )
}

export default DynamicsControl
