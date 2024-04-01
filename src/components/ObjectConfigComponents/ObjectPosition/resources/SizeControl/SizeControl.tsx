import SizeConfig from "../../../../SizeConfig/SizeConfig"
import type { SizeControlProps } from "./SizeControl_types"

function SizeControl({
  height,
  item,
  ratioLock,
  width
}: SizeControlProps): JSX.Element {
  return (
    <SizeConfig
      item={item}
      unit="m"
      step={0.01}
      actionWidth={
        item.type === "container" ? "container@width" : "obstacle@width"
      }
      actionHeight={
        item.type === "container" ? "container@height" : "obstacle@height"
      }
      valueWidth={width}
      valueHeight={height}
      actionRatioLock={
        item.type === "container" ? "container@ratioLock" : "obstacle@ratioLock"
      }
      valueRatioLock={ratioLock}
    />
  )
}

export default SizeControl
