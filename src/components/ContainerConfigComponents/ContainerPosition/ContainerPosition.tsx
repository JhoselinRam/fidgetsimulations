import useContainerPosition from "../../../hooks/useContainerPosition/useContainerPosition"
import ConfigSection from "../../ConfigSection/ConfigSection"
import MoveConfig from "../../MoveConfig/MoveConfig"
import SizeConfig from "../../SizeConfig/SizeConfig"
import type { ContainerConfigProps } from "../ContainerConfig_types"

function ContainerPosition({ item }: ContainerConfigProps): JSX.Element {
  const { positionX, positionY, height, width, ratioLock } =
    useContainerPosition(item)

  return (
    <ConfigSection title="Position and Size">
      <MoveConfig
        item={item}
        unit="m"
        step={0.01}
        actionX="container@positionX"
        actionY="container@positionY"
        valueX={positionX}
        valueY={positionY}
      />
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
    </ConfigSection>
  )
}

export default ContainerPosition
