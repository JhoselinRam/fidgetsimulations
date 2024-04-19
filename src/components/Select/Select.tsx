import {
  Button as RAButton,
  Label,
  Select as RASelect,
  SelectValue,
  Popover,
  ListBox
} from "react-aria-components"
import { createComponentNamespace } from "../../auxiliary/createComponentNamespace"
import type { SelectProps } from "./Select_types"
import Item from "./resources/Item/Item"
import type { ItemProps } from "./resources/Item/Item_types"
import DropArrowIcon from "../Icons/DropArrowIcon/DropArrowIcon"
import useSelect from "../../hooks/useSelect/useSelect"
import { useRef } from "react"

const Select = createComponentNamespace<SelectProps, ItemProps>(
  "Select",
  ({
    label,
    children,
    className,
    selectorClassName,
    labelClassName,
    matchSize,
    items,
    ...props
  }): JSX.Element => {
    const buttonElement = useRef<HTMLButtonElement>(null)
    const { isDrop, setIsDrop, popoverSize } = useSelect(
      buttonElement,
      matchSize ?? false
    )

    return (
      <RASelect
        className={`text-sm flex flex-row group ${className}`}
        isOpen={isDrop}
        onOpenChange={setIsDrop}
        {...props}
      >
        <Label className={labelClassName}>{label}</Label>
        <RAButton
          className={`rounded-md bg-zinc-500 pl-1 outline-none group-data-[focus-visible]:outline group-data-[focus-visible]:outline-2
        group-data-[focus-visible]:outline-accent-blue-300/30 group-data-[focus-visible]:outline-offset-2 flex flex-row justify-between items-stretch
         gap-2 w-full ${selectorClassName}`}
          ref={buttonElement}
        >
          <SelectValue />
          <div className="w-5 bg-accent-blue-600 flex justify-center items-center rounded-tr-md rounded-br-md">
            <div className="w-3">
              <DropArrowIcon className="stroke-zinc-300" isDrop={isDrop} />
            </div>
          </div>
        </RAButton>
        <Popover
          maxHeight={240}
          className={`bg-zinc-500 rounded-md border border-tuatara-400 -translate-y-1 overflow-y-auto 
        data-[entering]:data-[placement=bottom]:animate-select-bottom-enter data-[exiting]:data-[placement=bottom]:animate-select-bottom-exit
        data-[entering]:data-[placement=top]:animate-select-top-enter data-[exiting]:data-[placement=top]:animate-select-top-exit`}
          style={{
            width: matchSize != null && matchSize ? `${popoverSize}px` : "auto"
          }}
        >
          <ListBox items={items} className="text-sm outline-none">
            {children}
          </ListBox>
        </Popover>
      </RASelect>
    )
  },
  { Item }
)

export default Select
