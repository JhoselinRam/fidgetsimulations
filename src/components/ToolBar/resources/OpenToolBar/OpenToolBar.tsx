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
      className="w-16 !rounded-2xl !p-2 absolute top-3 right-3 bg-gin-fizz-50 shadow-neomorph-button-up
      data-[pressed]:shadow-neomorph-button-down"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={handleClick}
    >
      <GearIcon color="#3d3d3d" />
    </Button>
  )
}

export default OpenToolBar
