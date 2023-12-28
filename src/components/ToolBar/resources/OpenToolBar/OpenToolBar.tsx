import { useContext } from "react"
import Button from "../../../Button/Button"
import GearIcon from "../../../Icons/GearIcon/GearIcon"
import { toolBarContext } from "../../context"

function OpenToolBar(): JSX.Element {
  const { setIsCollapsed } = useContext(toolBarContext)

  function handleClick(): void {
    setIsCollapsed(false)
  }

  return (
    <Button
      className="w-10 !px-0 absolute top-1 right-1"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={handleClick}
    >
      <GearIcon />
    </Button>
  )
}

export default OpenToolBar
