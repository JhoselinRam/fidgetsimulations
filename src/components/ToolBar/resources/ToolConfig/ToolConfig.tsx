import { useContext, useRef } from "react"
import { toolBarContext } from "../../context"
import CloseConfig from "../CloseConfig/CloseConfig"

function ToolConfig(): JSX.Element {
  const { showConfig, addElementInMenu } = useContext(toolBarContext)
  const asideElement = useRef<HTMLElement>(null)

  addElementInMenu(asideElement)

  return (
    <aside
      className={`z-50 absolute top-0 bottom-0 right-0 w-full max-w-menu bg-tuatara-900 transition-transform 
    ${showConfig ? "translate-x-0" : "translate-x-full"}`}
      ref={asideElement}
      id="configBarAside"
    >
      <CloseConfig />
    </aside>
  )
}

export default ToolConfig
