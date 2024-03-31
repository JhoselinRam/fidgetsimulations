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
      actionWidth="container@width"
      actionHeight="container@height"
      valueWidth={width}
      valueHeight={height}
      actionRatioLock="container@ratioLock"
      valueRatioLock={ratioLock}
    />
  )
}

export default SizeControl
