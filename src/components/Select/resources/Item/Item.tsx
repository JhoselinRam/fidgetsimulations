import { ListBoxItem } from "react-aria-components"
import type { ItemProps } from "./Item_types"

function Item({ children, className, id, ...props }: ItemProps): JSX.Element {
  return (
    <ListBoxItem
      className={`px-2 outline-none data-[hovered]:cursor-pointer data-[hovered]:bg-zinc-400 data-[selected]:bg-zinc-400/40 data-[hovered]:data-[selected]:bg-zinc-400 
      data-[focused]:outline-none first:rounded-t-md last:rounded-b-md ${className}`}
      id={id}
      {...props}
    >
      {children}
    </ListBoxItem>
  )
}

export default Item
