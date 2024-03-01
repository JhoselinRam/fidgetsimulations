import { useContext, type RefObject } from "react"
import useRotation from "./resources/useRotation/useRotation"
import { toolBarContext } from "../../components/ToolBar/context"
import type { UseConfigButton } from "./useConfigButton_types"
import type { CollectionOrder } from "../useMainState/useMainState_types"

function useConfigButton(
  element: RefObject<HTMLButtonElement>,
  svg: RefObject<SVGSVGElement>,
  selectOnAction: () => void,
  item: CollectionOrder
): UseConfigButton {
  const { setShowConfig, setTargetCollection } = useContext(toolBarContext)
  useRotation(element, svg)

  function handleClick(): void {
    setShowConfig(true)
    selectOnAction()
    setTargetCollection(item)
  }

  return {
    handleClick
  }
}

export default useConfigButton
