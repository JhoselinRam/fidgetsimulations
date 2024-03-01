import { useRef } from "react"
import CloseConfig from "../CloseConfig/CloseConfig"
import useToolConfig from "../../../../hooks/useToolConfig/useToolConfig"
import type { ConfigByType } from "./ToolConfig_types"

function ToolConfig(): JSX.Element {
  const asideElement = useRef<HTMLElement>(null)
  const { showConfig, targetCollection } = useToolConfig(asideElement)
  const configComponent: ConfigByType = {
    simulationWindow: <div>{targetCollection?.type}</div>,
    dataoutput: <div>{targetCollection?.type}</div>,
    linechart: <div>{targetCollection?.type}</div>
  }

  return (
    <aside
      className={`z-50 absolute top-0 bottom-0 right-0 w-full max-w-menu bg-tuatara-900 transition-transform 
    ${showConfig ? "translate-x-0" : "translate-x-full"}`}
      ref={asideElement}
      id="configBarAside"
    >
      <CloseConfig />
      {targetCollection != null && configComponent[targetCollection.type]}
    </aside>
  )
}

export default ToolConfig
