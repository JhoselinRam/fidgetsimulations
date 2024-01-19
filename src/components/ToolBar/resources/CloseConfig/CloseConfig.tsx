import { useContext } from "react"
import Button from "../../../Button/Button"
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon"
import { toolBarContext } from "../../context"

function CloseConfig(): JSX.Element {
  const { setShowConfig } = useContext(toolBarContext)

  function handleClick(): void {
    setShowConfig(false)
  }

  return (
    <Button
      className="w-6 !px-0 absolute top-1 left-1 group"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={handleClick}
    >
      <CloseIcon className="fill-zinc-300 group-data-[hovered]:fill-zinc-300/70" />
    </Button>
  )
}

export default CloseConfig
