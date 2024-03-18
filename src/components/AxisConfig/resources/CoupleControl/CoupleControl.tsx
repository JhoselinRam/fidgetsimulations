import IconToggle from "../../../IconToggle/IconToggle"
import AxisCoupleIcon from "../../../Icons/AxisCoupleIcon/AxisCoupleIcon"
import ZoomIcon from "../../../Icons/ZoomIcon/ZoomIcon"
import type { CoupleControlProps } from "./CoupleControl_types"

function CoupleControl({
  couple,
  setCouple,
  setZoom,
  zoom,
  axis
}: CoupleControlProps): JSX.Element {
  return (
    <div className="flex flex-row gap-1 absolute top-1/2 right-0 -translate-y-1/2 translate-x-full">
      <IconToggle
        aria-label="axis couple movement"
        className={`w-5 rounded-md p-0.5 ${axis === "y" ? "rotate-90" : ""}`}
        coloredBy="stroke"
        isSelected={couple}
        onChange={setCouple}
      >
        <AxisCoupleIcon />
      </IconToggle>
      <IconToggle
        aria-label="axis zoom"
        className="w-5 rounded-md p-0.5"
        coloredBy="stroke"
        isSelected={zoom}
        onChange={setZoom}
      >
        <ZoomIcon />
      </IconToggle>
    </div>
  )
}

export default CoupleControl
