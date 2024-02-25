import { GridList } from "react-aria-components"
import useCollectionList from "../../hooks/useCollectionList/useCollectionList"
import CollectionItem from "./resources/CollectionItem/CollectionItem"

function CollectionList(): JSX.Element {
  const { items } = useCollectionList()

  return (
    <section
      className="h-64 bg-tuatara-800 mx-2 my-4 border-2 border-tuatara-500 rounded-md pt-2
    px-2 flex flex-col overflow-y-auto"
    >
      <GridList
        items={items}
        selectionMode="multiple"
        selectionBehavior="replace"
        defaultSelectedKeys={["simulationWindow"]}
        disallowEmptySelection
        aria-label="Collection grid"
      >
        {(item) => <CollectionItem item={item} />}
      </GridList>
    </section>
  )
}

export default CollectionList
