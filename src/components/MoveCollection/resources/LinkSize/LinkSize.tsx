import LinkIcon from "../../../Icons/LinkIcon/LinkIcon"
import IconToggle from "../../../IconToggle/IconToggle"

function LinkSize(): JSX.Element {
  return (
    <IconToggle
      className="w-4 h-6 rounded-full absolute top-1/2 -translate-y-1/2 right-0 translate-x-full"
      aria-label="lock aspect ration"
      coloredBy="fill"
    >
      <LinkIcon />
    </IconToggle>
  )
}

export default LinkSize
