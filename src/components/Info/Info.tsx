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
import { forwardRef, useRef } from "react"

const Info = forwardRef<HTMLDivElement, InfoProps>(
  (
    { children, className = "", iconClassName = "", offset = 10, ...props },
    ref
  ): JSX.Element => {
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
          <div className="w-4">
            <InfoIcon className={`fill-accent-blue-500 ${iconClassName}`} />
          </div>
        </Button>
        <Popover
          className={`bg-tuatara-400 border-tuatara-300 text-zinc-950 border rounded-md text-xs max-w-menu group
        data-[entering]:data-[placement=top]:animate-info-top-enter data-[exiting]:data-[placement=top]:animate-info-top-exit
        data-[entering]:data-[placement=bottom]:animate-info-bottom-enter data-[exiting]:data-[placement=bottom]:animate-info-bottom-exit
        data-[entering]:data-[placement=left]:animate-info-left-enter data-[exiting]:data-[placement=left]:animate-info-left-exit
        data-[entering]:data-[placement=right]:animate-info-right-enter data-[exiting]:data-[placement=right]:animate-info-right-exit
        ${className}`}
          offset={offset}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          ref={ref}
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
          <Dialog className="outline-none p-3" ref={dialogElement}>
            {children}
          </Dialog>
        </Popover>
      </DialogTrigger>
    )
  }
)

Info.displayName = "Info"

export default Info
