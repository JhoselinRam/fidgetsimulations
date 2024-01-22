import OpenToolBar from "./resources/OpenToolBar/OpenToolBar"
import { toolBarContext } from "./context"
import Tools from "./resources/Tools/Tools"
import ToolConfig from "./resources/ToolConfig/ToolConfig"
import useToolBar from "../../hooks/useToolBar/useToolBar"

function ToolBar(): JSX.Element {
  const toolBarState = useToolBar()

  return (
    <toolBarContext.Provider value={toolBarState}>
      <Tools />
      <OpenToolBar />
      <ToolConfig />
    </toolBarContext.Provider>
  )
}

export default ToolBar
