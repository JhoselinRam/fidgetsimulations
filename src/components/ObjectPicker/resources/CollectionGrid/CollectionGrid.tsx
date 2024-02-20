import { ListBox, ListBoxItem } from "react-aria-components"
import type {
  CollectionsGridProps,
  ItemsBySelection
} from "./CollectionGrid_types"
import CollectionButton from "../CollectionButton/CollectionButton"
import { dataOutItem, lineChartItem } from "../Collections/Graphical"
import { ballsItem, fabricItem, ropeItem } from "../Collections/Objects"
import {
  containerItem,
  obstacleItem,
  rodItem,
  springItem
} from "../Collections/Constrains"
import {
  dragItem,
  electricItem,
  gravityItem,
  localGravityItem
} from "../Collections/Force"

function CollectionGrid({ selection }: CollectionsGridProps): JSX.Element {
  const collectionItems: ItemsBySelection = {
    graphical: [lineChartItem, dataOutItem],
    constrains: [springItem, rodItem, obstacleItem, containerItem],
    objects: [ballsItem, ropeItem, fabricItem],
    force: [localGravityItem, gravityItem, dragItem, electricItem]
  }

  return (
    <div className="flex-grow pt-5">
      <ListBox
        className="grid grid-cols-collection gap-y-2 justify-items-center"
        items={collectionItems[selection]}
        layout="grid"
        orientation="horizontal"
        aria-label="collection grid"
        selectionMode="none"
      >
        {(item) => (
          <ListBoxItem
            className="w-fit outline-none rounded-md data-[focus-visible]:outline data-[focus-visible]:outline-accent-blue-300/50
          data-[focus-visible]:outline-offset-4"
            textValue={item.id}
          >
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
