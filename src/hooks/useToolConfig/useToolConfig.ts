import { useContext, type RefObject, useEffect } from "react"
import type { UseToolConfig } from "./useToolConfig_types"
import { toolBarContext } from "../../components/ToolBar/context"

function useToolConfig(asideElement: RefObject<HTMLElement>): UseToolConfig {
  const { showConfig, addElementInMenu, targetCollection } =
    useContext(toolBarContext)

  useEffect(() => {
    addElementInMenu(asideElement)
  }, [addElementInMenu, asideElement])

  return {
    showConfig,
    targetCollection
  }
}

export default useToolConfig
