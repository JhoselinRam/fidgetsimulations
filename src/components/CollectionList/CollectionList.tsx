import { GridList } from "react-aria-components"
import useCollectionList from "../../hooks/useCollectionList/useCollectionList"
import CollectionItem from "./resources/CollectionItem/CollectionItem"

function CollectionList(): JSX.Element {
  const { items, selection, setSelection, dragAndDropHooks } =
    useCollectionList()

  return (
    <section
      className="h-64 bg-tuatara-800 mx-2 my-4 border-2 border-tuatara-500 rounded-md pt-2
    px-2 flex flex-col overflow-y-auto"
    >
      <GridList
        items={items}
        selectionMode="multiple"
        selectionBehavior="replace"
        selectedKeys={selection}
        onSelectionChange={setSelection}
        aria-label="Collection grid"
        dragAndDropHooks={dragAndDropHooks}
        className="drop-indicator:outline drop-indicator:outline-1 drop-indicator:outline-accent-blue-500 drop-indicator:relative 
        drop-indicator:before:w-2 drop-indicator:before:h-2 drop-indicator:before:rounded-full drop-indicator:before:bg-accent-blue-500
        drop-indicator:before:absolute drop-indicator:before:left-0 drop-indicator:before:top-0 drop-indicator:before:-translate-y-1/2 drop-indicator:before:-translate-x-1/2
        drop-indicator:after:w-2 drop-indicator:after:h-2 drop-indicator:after:rounded-full drop-indicator:after:bg-accent-blue-500
        drop-indicator:after:absolute drop-indicator:after:right-0 drop-indicator:after:top-0 drop-indicator:after:-translate-y-1/2 drop-indicator:after:translate-x-1/2"
      >
        {(item) => <CollectionItem item={item} setSelection={setSelection} />}
      </GridList>
    </section>
  )
}

export default CollectionList
