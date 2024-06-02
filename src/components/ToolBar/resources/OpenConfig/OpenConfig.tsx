import { useRef } from "react"
import Button from "../../../Button/Button"
import GearIcon from "../../../Icons/GearIcon/GearIcon"
import useConfigButton from "../../../../hooks/useConfigButton/useConfigButton"
import type { OpenConfigProps } from "./OpenConfig_types"

function OpenConfig({
  selectOnAction,
  item,
  isDisabled
}: OpenConfigProps): JSX.Element {
  const buttonElement = useRef<HTMLButtonElement>(null)
  const svgElement = useRef<SVGSVGElement>(null)

  const { handleClick } = useConfigButton(
    buttonElement,
    svgElement,
    selectOnAction,
    item,
    isDisabled
  )

  return (
    <Button
      className="w-5 !p-0 flex-shrink-0 group"
      buttonType="transparent"
      onPress={handleClick}
      aria-label="openConfigTool"
      ref={buttonElement}
      isDisabled={isDisabled}
    >
      <GearIcon
        className="fill-tuatara-100 transition-transform ease-overshot group-data-[disabled]:fill-tuatara-300"
        ref={svgElement}
      />
    </Button>
  )
}

export default OpenConfig
