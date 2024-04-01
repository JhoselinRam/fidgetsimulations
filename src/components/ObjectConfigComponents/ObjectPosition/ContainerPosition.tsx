import useObjectPosition from "../../../hooks/useObjectPosition/useObjectPosition"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { ObjectConfigProps } from "../ObjectConfig_types"
import HeaderControl from "./resources/HeaderControl/HeaderControl"
import PositionControl from "./resources/PositionControl/PositionControl"
import SizeControl from "./resources/SizeControl/SizeControl"

function ObjectPosition({ item }: ObjectConfigProps): JSX.Element {
  const { positionX, positionY, height, width, ratioLock, setAspectRatio } =
    useObjectPosition(item)

  return (
    <ConfigSection title="Position and Size">
      <HeaderControl item={item} setAspectRatio={setAspectRatio} />
      <PositionControl
        item={item}
        positionX={positionX}
        positionY={positionY}
      />
      <SizeControl
        item={item}
        width={width}
        height={height}
        ratioLock={ratioLock}
      />
    </ConfigSection>
  )
}

export default ObjectPosition
