import IconToggle from "../../../IconToggle/IconToggle"
import TransformIcon from "../../../Icons/TransformIcon/TransformIcon"
import type { ManualControlProps } from "./ManualControl_types"

function ManualControl(manualControlProps: ManualControlProps): JSX.Element {
  return (
    <header className="flex flex-row items-center gap-3 text-zinc-300">
      Position and Size:
      <IconToggle
        className="w-5 rounded-md p-0.5"
        coloredBy="stroke"
        {...manualControlProps}
      >
        <TransformIcon />
      </IconToggle>
    </header>
  )
}

export default ManualControl
