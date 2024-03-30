import useMoveCollection from "../../hooks/useMoveCollection/useMoveCollection"
import type { ConfigCollectionProps } from "../ConfigCollection/ConfigCollection_types"
import ConfigSection from "../ConfigSection/ConfigSection"
import MoveConfig from "../MoveConfig/MoveConfig"
import SizeConfig from "../SizeConfig/SizeConfig"
import ManualControl from "./resources/ManualControl/ManualControl"

function MoveCollection({ item }: ConfigCollectionProps): JSX.Element {
  const { manualControlProps, height, lockRatio, positionX, positionY, width } =
    useMoveCollection(item)

  return (
    <ConfigSection title="Position and Size">
      <ManualControl {...manualControlProps} />
      <MoveConfig
        step={1}
        unit="px"
        actionX="graphic@positionX"
        actionY="graphic@positionY"
        valueX={positionX}
        valueY={positionY}
        item={item}
      />
      <SizeConfig
        step={1}
        unit="px"
        item={item}
        valueWidth={width}
        valueHeight={height}
        valueRatioLock={lockRatio}
        actionWidth="graphic@width"
        actionHeight="graphic@height"
        actionRatioLock="graphic@lockRatio"
      />
    </ConfigSection>
  )
}

export default MoveCollection
