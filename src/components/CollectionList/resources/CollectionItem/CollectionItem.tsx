import { GridListItem } from "react-aria-components"
import type { CollectionItemProps } from "./CollectionItem_types"
import useCollectionItem from "../../../../hooks/useCollectionItem/useCollectionItem"
import DragHandler from "../DragHandler/DragHandler"
import CollectionName from "../CollectionName/CollectionName"
import DeleteCollection from "../DeleteCollection/DeleteCollection"
import OpenConfig from "../../../ToolBar/resources/OpenConfig/OpenConfig"

function CollectionItem({
  item,
  setSelection
}: CollectionItemProps): JSX.Element {
  const { name, icon, onDelete, selectOnAction } = useCollectionItem(
    item,
    setSelection
  )

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
      <CollectionName name={name} />
      <OpenConfig selectOnAction={selectOnAction} item={item} />
      {item.type === "simulationWindow" || item.type === "balls" ? (
        <div className="w-4 flex-shrink-0"></div>
      ) : (
        <DeleteCollection onDelete={onDelete} selectOnAction={selectOnAction} />
      )}
    </GridListItem>
  )
}

export default CollectionItem
