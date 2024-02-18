import { ListBox, ListBoxItem } from "react-aria-components"
import type {
  CollectionsGridProps,
  ItemsBySelection
} from "./CollectionGrid_types"
import CollectionButton from "../CollectionButton/CollectionButton"
import { dataOutItem, lineChartItem } from "../Collections/Graphical"
import { ballsItem, fabricItem, ropeItem } from "../Collections/Objects"

function CollectionGrid({ selection }: CollectionsGridProps): JSX.Element {
  const collectionItems: ItemsBySelection = {
    graphical: [lineChartItem, dataOutItem],
    constrains: [],
    objects: [ballsItem, ropeItem, fabricItem],
    force: []
  }

  return (
    <div className="flex-grow py-4">
      <ListBox
        className="grid grid-cols-collection gap-3 justify-items-center"
        items={collectionItems[selection]}
        layout="grid"
        orientation="horizontal"
        aria-label="collection grid"
      >
        {(item) => (
          <ListBoxItem className="w-fit outline-none" textValue={item.id}>
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
