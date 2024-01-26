import { useContext } from "react"
import { toolBarContext } from "../../context"
import CloseConfig from "../CloseConfig/CloseConfig"

function ToolConfig(): JSX.Element {
  const { showConfig, addElementInMenu } = useContext(toolBarContext)

  function getAsideElement(e: HTMLElement): void {
    if (e == null) return

    addElementInMenu(e)
  }

  return (
    <aside
      className={`z-50 absolute top-0 bottom-0 right-0 w-full max-w-menu bg-tuatara-900 transition-transform 
    ${showConfig ? "translate-x-0" : "translate-x-full"}`}
      ref={getAsideElement}
      id="configBarAside"
    >
      <CloseConfig />
    </aside>
  )
}

export default ToolConfig
