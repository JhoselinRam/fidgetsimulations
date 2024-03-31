import useContainerPosition from "../../../hooks/useContainerPosition/useContainerPosition"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { ContainerConfigProps } from "../ContainerConfig_types"
import HeaderControl from "./resources/HeaderControl/HeaderControl"
import PositionControl from "./resources/PositionControl/PositionControl"
import SizeControl from "./resources/SizeControl/SizeControl"

function ContainerPosition({ item }: ContainerConfigProps): JSX.Element {
  const { positionX, positionY, height, width, ratioLock, setAspectRatio } =
    useContainerPosition(item)

  return (
    <ConfigSection title="Position and Size">
      <HeaderControl setAspectRatio={setAspectRatio} />
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

export default ContainerPosition
