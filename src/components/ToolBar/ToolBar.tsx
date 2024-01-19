import { useMenuToggle } from "../../hooks/useMenuToggle/useMenuToggle"
import OpenToolBar from "./resources/OpenToolBar/OpenToolBar"
import { toolBarContext } from "./context"
import Tools from "./resources/Tools/Tools"
import ToolConfig from "./resources/ToolConfig/ToolConfig"
import { useState } from "react"

function ToolBar(): JSX.Element {
  const menuState = useMenuToggle(import.meta.env.VITE_TOOL_TOGGLE_QUERY)
  const [showConfig, setShowConfig] = useState(false)

  return (
    <toolBarContext.Provider
      value={{ showConfig, setShowConfig, ...menuState }}
    >
      <Tools />
      <OpenToolBar />
      <ToolConfig />
    </toolBarContext.Provider>
  )
}

export default ToolBar
