import IconToggle from "../../../IconToggle/IconToggle"
import AxisCoupleIcon from "../../../Icons/AxisCoupleIcon/AxisCoupleIcon"
import ZoomIcon from "../../../Icons/ZoomIcon/ZoomIcon"

function CoupleControl(): JSX.Element {
  return (
    <div className="flex flex-row gap-1 absolute top-1/2 right-0 -translate-y-1/2 translate-x-full">
      <IconToggle
        aria-label="axis couple movement"
        className="w-5 rounded-md p-0.5"
        coloredBy="stroke"
      >
        <AxisCoupleIcon />
      </IconToggle>
      <IconToggle
        aria-label="axis couple movement"
        className="w-5 rounded-md p-0.5"
        coloredBy="stroke"
      >
        <ZoomIcon />
      </IconToggle>
    </div>
  )
}

export default CoupleControl
