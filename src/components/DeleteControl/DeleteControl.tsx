import {
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover
} from "react-aria-components"
import type { DeleteControlProps } from "./DeleteControl_types"
import Button from "../Button/Button"
import DeleteIcon from "../Icons/DeleteIcon/DeleteIcon"
import { useState } from "react"

function DeleteControl({
  actionOnPress,
  className,
  offset,
  onDelete,
  placement,
  disabled
}: DeleteControlProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogTrigger>
      <Button
        className={`!px-0 w-4 stroke-red-800 data-[disabled]:stroke-tuatara-900 ${className}`}
        buttonType="transparent"
        aria-label="Delete collection"
        onPress={() => {
          setIsOpen(true)
          if (actionOnPress != null) actionOnPress()
        }}
        isDisabled={disabled}
      >
        <DeleteIcon />
      </Button>
      <Popover
        className="bg-red-700 border border-red-800 rounded-xl group
        data-[entering]:data-[placement=top]:animate-info-top-enter data-[exiting]:data-[placement=top]:animate-info-top-exit
        data-[entering]:data-[placement=bottom]:animate-info-bottom-enter data-[exiting]:data-[placement=bottom]:animate-info-bottom-exit
        data-[entering]:data-[placement=left]:animate-info-left-enter data-[exiting]:data-[placement=left]:animate-info-left-exit
        data-[entering]:data-[placement=right]:animate-info-right-enter data-[exiting]:data-[placement=right]:animate-info-right-exit"
        placement={placement}
        offset={offset}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <OverlayArrow>
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            className="fill-red-700 group-data-[placement=right]:rotate-90
            group-data-[placement=left]:-rotate-90 group-data-[placement=bottom]:rotate-180"
          >
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        <Dialog className="outline-none py-0.5">
          <Button
            buttonType="transparent"
            className="text-sm text-red-50 font-semibold"
            onPress={() => {
              setIsOpen(false)
              if (onDelete != null) onDelete()
            }}
          >
            Delete
          </Button>
        </Dialog>
      </Popover>
    </DialogTrigger>
  )
}

export default DeleteControl
