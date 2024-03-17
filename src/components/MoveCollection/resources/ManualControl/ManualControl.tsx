import ConfigSection from "../../../ConfigSection/ConfigSection"
import IconToggle from "../../../IconToggle/IconToggle"
import TransformIcon from "../../../Icons/TransformIcon/TransformIcon"
import Info from "../../../Info/Info"
import type { ManualControlProps } from "./ManualControl_types"

function ManualControl(manualControlProps: ManualControlProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <p>Manual control:</p>
      <IconToggle
        className="w-5 rounded-md p-0.5"
        coloredBy="stroke"
        {...manualControlProps}
      >
        <TransformIcon />
      </IconToggle>
      <Info placement="left" crossOffset={10}>
        Initiate the manual movement and resize of the element.
      </Info>
    </ConfigSection.Header>
  )
}

export default ManualControl
