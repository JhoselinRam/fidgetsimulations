import ConfigSection from "../../../../ConfigSection/ConfigSection"
import IconButton from "../../../../IconButton/IconButton"
import AspectRatioIcon from "../../../../Icons/AspectRatioIcon/AspectRatioIcon"
import Info from "../../../../Info/Info"
import type { HeaderControlProps } from "./HeaderControl_types"

function HeaderControl({
  setAspectRatio,
  item
}: HeaderControlProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <p>Size:</p>
      <IconButton coloredBy="fill" onPress={setAspectRatio}>
        <AspectRatioIcon />
      </IconButton>
      <Info placement="left" crossOffset={20}>
        <p>Sets the {item.type} aspect ratio to 1:1</p>
        <p className="mt-2">
          To ensure the correct aspect ratio the {item.type} height will be
          changed.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default HeaderControl
