import Button from "../../../Button/Button"
import ToolsIcon from "../../../Icons/ToolsIcon/ToolsIcon"
import useToolButton from "../../../../hooks/useToolButton/useToolButton"

function OpenToolBar(): JSX.Element {
  const {
    isQueryMeet,
    isCollapsed,
    handleClick,
    knobsPosition,
    handleHoverStart,
    handleHoverEnd
  } = useToolButton()

  return (
    <Button
      className={`xs:block w-16 !rounded-2xl !p-2 absolute top-3 right-3 z-40
     !bg-sky-200 shadow-tool-up data-[hovered]:!bg-sky-300 data-[pressed]:shadow-tool-down
      data-[disabled]:shadow-tool-down ${isCollapsed ? "block" : "hidden"} ${
        isQueryMeet ? "opacity-0" : "opacity-100"
      } data-[focus-visible]:outline-accent-blue-300/70 data-[focus-visible]:outline-offset-2 
      stroke-tuatara-800`}
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={handleClick}
      isDisabled={!isCollapsed}
      excludeFromTabOrder={isQueryMeet}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <ToolsIcon className="" knobsPosition={knobsPosition} />
    </Button>
  )
}

export default OpenToolBar
