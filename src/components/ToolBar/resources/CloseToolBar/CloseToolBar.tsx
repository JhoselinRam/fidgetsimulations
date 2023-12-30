import { useContext } from "react"
import Button from "../../../Button/Button"
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon"
import { toolBarContext } from "../../context"

function CloseToolBar(): JSX.Element {
  const { setIsCollapsed } = useContext(toolBarContext)

  function handleClick(): void {
    setIsCollapsed(true)
  }

  return (
    <Button
      className="w-6 !px-0 absolute top-1 right-1 group"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={handleClick}
    >
      <CloseIcon className="fill-gin-fizz-50 group-data-[hovered]:fill-gin-fizz-50/70" />
    </Button>
  )
}

export default CloseToolBar
