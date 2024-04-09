import ConfigSection from "../../../ConfigSection/ConfigSection"
import IconButton from "../../../IconButton/IconButton"
import AspectRatioIcon from "../../../Icons/AspectRatioIcon/AspectRatioIcon"
import Info from "../../../Info/Info"
import type { ManualControlProps } from "./ManualControl_types"

function ManualControl({ onPress }: ManualControlProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <p>Domain:</p>
      <IconButton coloredBy="fill" onPress={onPress}>
        <AspectRatioIcon />
      </IconButton>
      <Info placement="left" crossOffset={20}>
        <p>Sets the axis aspect ratio to 1:1</p>
        <p className="mt-2">
          To ensure the correct aspect ratio the <i>y</i> domain will be
          changed.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default ManualControl
