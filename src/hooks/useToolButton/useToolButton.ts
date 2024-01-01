import { useContext, useEffect, useState } from "react"
import type { KnobPositions, UseToolButton } from "./useToolButton_types"
import { toolBarContext } from "../../components/ToolBar/context"

function useToolButton(): UseToolButton {
  const { addElementInMenu, isCollapsed, isQueryMeet, setIsCollapsed } =
    useContext(toolBarContext)
  const [knobsPosition, setKnobsPosition] = useState<KnobPositions>("idle")

  // Open the toolbar when the button is press
  function handleClick(): void {
    setIsCollapsed(false)
    setKnobsPosition("activated")
  }

  // Handle the knobs position while hovering the button
  function handleHoverStart(): void {
    setKnobsPosition("hover")
  }

  function handleHoverEnd(): void {
    if (isCollapsed) setKnobsPosition("idle")
  }

  // Handle the knobs positions when the toolbar is collapsed
  useEffect(() => {
    if (isCollapsed) setKnobsPosition("idle")
  }, [isCollapsed])

  return {
    addElementInMenu,
    isCollapsed,
    isQueryMeet,
    setIsCollapsed,
    knobsPosition,
    handleClick,
    handleHoverStart,
    handleHoverEnd
  }
}

export default useToolButton
