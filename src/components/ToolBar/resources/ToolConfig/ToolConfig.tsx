import { useRef } from "react"
import CloseConfig from "../CloseConfig/CloseConfig"
import useToolConfig from "../../../../hooks/useToolConfig/useToolConfig"
import type { ConfigByType } from "./ToolConfig_types"
import ConfigSimulationWindow from "../../../ConfigElements/ConfigSimulationWindow/ConfigSimulationWindow"
import ConfigDataOutput from "../../../ConfigElements/ConfigDataOutput/ConfigDataOutput"
import ConfigLinechart from "../../../ConfigElements/ConfigLinechart/ConfigLinechart"
import ConfigContainer from "../../../ConfigElements/ConfigContainer/ConfigContainer"
import ConfigObstacle from "../../../ConfigElements/ConfigObstacle/ConfigObstacle"
import ConfigBalls from "../../../ConfigElements/ConfigBalls/ConfigBalls"
import ConfigLocalGravity from "../../../ConfigElements/ConfigLocalGravity/ConfigLocalGravity"
import ConfigGravity from "../../../ConfigElements/ConfigGravity/ConfigGravity"
import ConfigDrag from "../../../ConfigElements/ConfigDrag/ConfigDrag"
import ConfigElectric from "../../../ConfigElements/ConfigElectric/ConfigElectric"
import ConfigDamping from "../../../ConfigElements/ConfigDamping/ConfigDamping"
import ConfigVelocityVector from "../../../ConfigElements/ConfigVelocityVector/ConfigVelocityVector"
import ConfigAccelerationVector from "../../../ConfigElements/ConfigAccelerationVector/ConfigAccelerationVector"

function ToolConfig(): JSX.Element {
  const asideElement = useRef<HTMLElement>(null)
  const { showConfig, targetCollection } = useToolConfig(asideElement)
  const configComponent: ConfigByType = {
    simulationWindow: (item) => <ConfigSimulationWindow item={item} />,
    dataoutput: (item) => <ConfigDataOutput item={item} />,
    linechart: (item) => <ConfigLinechart item={item} />,
    container: (item) => <ConfigContainer item={item} />,
    obstacle: (item) => <ConfigObstacle item={item} />,
    balls: (item) => <ConfigBalls item={item} />,
    localGravity: (item) => <ConfigLocalGravity item={item} />,
    gravity: (item) => <ConfigGravity item={item} />,
    drag: (item) => <ConfigDrag item={item} />,
    electric: (item) => <ConfigElectric item={item} />,
    damping: (item) => <ConfigDamping item={item} />,
    velocityVector: (item) => <ConfigVelocityVector item={item} />,
    accelerationVector: (item) => <ConfigAccelerationVector item={item} />
  }

  return (
    <aside
      className={`z-50 absolute top-0 bottom-0 right-0 w-full max-w-menu bg-tuatara-900 transition-transform overflow-y-auto
    ${showConfig ? "translate-x-0" : "translate-x-full"}`}
      ref={asideElement}
      id="configBarAside"
    >
      <CloseConfig />
      {targetCollection != null &&
        configComponent[targetCollection.type](targetCollection)}
    </aside>
  )
}

export default ToolConfig
