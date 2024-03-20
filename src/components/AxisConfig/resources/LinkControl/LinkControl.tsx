import IconToggle from "../../../IconToggle/IconToggle"
import LinkIcon from "../../../Icons/LinkIcon/LinkIcon"
import type { LinkControlProps } from "./LinkControl_types"

function LinkControl(linkHooks: LinkControlProps): JSX.Element {
  return (
    <IconToggle
      className="w-4 h-6 rounded-full absolute top-full left-1/2 translate-x-11 translate-y-1"
      aria-label="lock aspect ratio"
      coloredBy="fill"
      {...linkHooks}
    >
      <LinkIcon />
    </IconToggle>
  )
}

export default LinkControl
