import { GridListItem } from "react-aria-components"
import type { CollectionItemProps } from "./CollectionItem_types"
import useCollectionItem from "../../../../hooks/useCollectionItem/useCollectionItem"
import DragHandler from "../DragHandler/DragHandler"
import CollectionName from "../CollectionName/CollectionName"

function CollectionItem({ item }: CollectionItemProps): JSX.Element {
  const { name, icon } = useCollectionItem(item)

  return (
    <GridListItem
      className="text-sm bg-zinc-500 rounded-md h-10 mb-1 outline-none flex flex-row items-center
      gap-2 px-1 group
      data-[selected]:bg-zinc-400"
      textValue={item.id}
      id={item.id}
    >
      <DragHandler />
      {icon}
      <CollectionName name={name} editing={false} />
    </GridListItem>
  )
}

export default CollectionItem
