import {
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover
} from "react-aria-components"
import type { InfoProps } from "./Info_types"
import Button from "../Button/Button"
import InfoIcon from "../Icons/InfoIcon/InfoIcon"
import useTooltip from "../../hooks/useTooltip/useTooltip"
import { useRef } from "react"

function Info({
  children,
  className = "",
  iconClassName = "",
  offset = 10,
  ...props
}: InfoProps): JSX.Element {
  const buttonElement = useRef<HTMLButtonElement>(null)
  const dialogElement = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen, buttonToggle } = useTooltip(
    buttonElement,
    dialogElement
  )

  return (
    <DialogTrigger>
      <Button
        buttonType="transparent"
        className="!p-0"
        onPress={buttonToggle}
        ref={buttonElement}
      >
        <div className="w-5">
          <InfoIcon className={`fill-accent-blue-500 ${iconClassName}`} />
        </div>
      </Button>
      <Popover
        className={`bg-tuatara-400 border-tuatara-300 text-zinc-950 border-2 rounded-md p-3 text-xs max-w-menu group ${className}`}
        offset={offset}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        {...props}
      >
        <OverlayArrow>
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            className="stroke-tuatara-300 fill-tuatara-400 group-data-[placement=right]:rotate-90
            group-data-[placement=left]:-rotate-90 group-data-[placement=bottom]:rotate-180"
          >
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        <Dialog className="outline-none" ref={dialogElement}>
          {children}
        </Dialog>
      </Popover>
    </DialogTrigger>
  )
}

export default Info
