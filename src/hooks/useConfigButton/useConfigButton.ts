import { useContext, type RefObject } from "react"
import useRotation from "./resources/useRotation/useRotation"
import { toolBarContext } from "../../components/ToolBar/context"
import type { UseConfigButton } from "./useConfigButton_types"

function useConfigButton(
  element: RefObject<HTMLButtonElement>,
  svg: RefObject<SVGSVGElement>,
  selectOnAction: () => void
): UseConfigButton {
  const { setShowConfig } = useContext(toolBarContext)
  useRotation(element, svg)

  function handleClick(): void {
    setShowConfig(true)
    selectOnAction()
  }

  return {
    handleClick
  }
}

export default useConfigButton
