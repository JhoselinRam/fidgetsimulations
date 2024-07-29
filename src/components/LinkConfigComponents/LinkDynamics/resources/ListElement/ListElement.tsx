import { ListBoxItem } from "react-aria-components"
import type { ListElementProps } from "./ListElement_types"

function ListElement({ ballElement }: ListElementProps): JSX.Element {
  return (
    <ListBoxItem
      id={ballElement.id}
      className="my-1 outline-none text-nowrap overflow-hidden rounded-md px-2 py-1 flex group 
      data-[selected]:bg-zinc-400 data-[selected]:text-zinc-950 data-[hovered]:cursor-pointer
      data-[focus-visible]:ring-1 data-[focus-visible]:ring-inset data-[focus-visible]:ring-zinc-400
      data-[selected]:data-[focus-visible]:ring-zinc-900"
      textValue={ballElement.name}
    >
      <span
        className="border-b w-full px-2 border-zinc-500 group-data-[selected]:border-transparent
      group-data-[focus-visible]:border-transparent"
      >
        {ballElement.name}
      </span>
    </ListBoxItem>
  )
}

export default ListElement
