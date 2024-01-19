import { useContext, useRef } from "react"
import Button from "../../../Button/Button"
import GearIcon from "../../../Icons/GearIcon/GearIcon"
import { toolBarContext } from "../../context"
import useConfigButton from "../../../../hooks/useConfigButton/useConfigButton"

function OpenConfig(): JSX.Element {
  const { setShowConfig } = useContext(toolBarContext)
  const buttonElement = useRef<HTMLButtonElement>(null)
  const svgElement = useRef<SVGSVGElement>(null)

  useConfigButton(buttonElement, svgElement)

  function handleClick(): void {
    setShowConfig(true)
  }

  return (
    <Button
      className="w-14 !p-0"
      buttonType="transparent"
      onPress={handleClick}
      aria-label="openConfigTool"
      ref={buttonElement}
    >
      <GearIcon
        className="fill-zinc-300 transition-transform ease-overshot"
        ref={svgElement}
      />
    </Button>
  )
}

export default OpenConfig
