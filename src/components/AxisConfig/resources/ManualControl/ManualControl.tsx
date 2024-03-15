import IconToggle from "../../../IconToggle/IconToggle"
import TransformIcon from "../../../Icons/TransformIcon/TransformIcon"

function ManualControl(): JSX.Element {
  return (
    <header className="flex flex-row items-center gap-3 text-zinc-300 mb-1">
      Axis
      <IconToggle className="w-5 rounded-md p-0.5" coloredBy="stroke">
        <TransformIcon />
      </IconToggle>
      <IconToggle className="w-5 rounded-md p-0.5" coloredBy="stroke">
        <TransformIcon />
      </IconToggle>
    </header>
  )
}

export default ManualControl
