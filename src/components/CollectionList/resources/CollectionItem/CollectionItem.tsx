import { GridListItem } from "react-aria-components"
import type { CollectionItemProps } from "./CollectionItem_types"

function CollectionItem({ item }: CollectionItemProps): JSX.Element {
  return (
    <GridListItem
      className="text-sm bg-zinc-500 rounded-md h-10 mb-1 outline-none
      data-[selected]:bg-zinc-400"
      textValue={item.id}
      id={item.id}
    >
      {`type:${item.id}`}
    </GridListItem>
  )
}

export default CollectionItem
