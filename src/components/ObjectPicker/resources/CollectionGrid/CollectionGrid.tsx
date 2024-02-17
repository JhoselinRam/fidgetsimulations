import { ListBox, ListBoxItem } from "react-aria-components"
import type {
  CollectionsGridProps,
  ItemsBySelection
} from "./CollectionGrid_types"
import CollectionButton from "../CollectionButton/CollectionButton"
import { dataOutItem, lineChartItem } from "../Collections/Graphical"

function CollectionGrid({ selection }: CollectionsGridProps): JSX.Element {
  const collectionItems: ItemsBySelection = {
    graphical: [lineChartItem, dataOutItem],
    constrains: [],
    objects: [],
    force: []
  }

  return (
    <div className="flex-grow py-4">
      <ListBox
        className="grid grid-cols-collection gap-3 justify-items-center"
        items={collectionItems[selection]}
        layout="grid"
        orientation="horizontal"
      >
        {(item) => (
          <ListBoxItem className="w-fit">
            <CollectionButton action={item.action} title={item.title}>
              {item.children}
            </CollectionButton>
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  )
}

export default CollectionGrid
