import { useRef } from "react"
import CloseConfig from "../CloseConfig/CloseConfig"
import useToolConfig from "../../../../hooks/useToolConfig/useToolConfig"
import type { ConfigByType } from "./ToolConfig_types"
import ConfigSimulationWindow from "../../../ConfigElements/ConfigSimulationWindow/ConfigSimulationWindow"
import ConfigDataOutput from "../../../ConfigElements/ConfigDataOutput/ConfigDataOutput"
import ConfigLinechart from "../../../ConfigElements/ConfigLinechart/ConfigLinechart"
import ConfigContainer from "../../../ConfigElements/ConfigContainer/ConfigContainer"

function ToolConfig(): JSX.Element {
  const asideElement = useRef<HTMLElement>(null)
  const { showConfig, targetCollection } = useToolConfig(asideElement)
  const configComponent: ConfigByType = {
    simulationWindow: (item) => <ConfigSimulationWindow item={item} />,
    dataoutput: (item) => <ConfigDataOutput item={item} />,
    linechart: (item) => <ConfigLinechart item={item} />,
    container: (item) => <ConfigContainer item={item} />
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
