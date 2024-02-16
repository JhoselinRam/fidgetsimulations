import { ListBox, ListBoxItem } from "react-aria-components"
import type { CollectionsGridProps } from "./CollectionsGrid_types"

function CollectionGrid({ selection }: CollectionsGridProps): JSX.Element {
  const test = [
    { id: 1, name: "Balls" },
    { id: 2, name: "Rope" },
    { id: 3, name: "Fabric" },
    { id: 4, name: "Obstacle" }
  ]

  return (
    <div className="flex-grow p-2">
      <ListBox
        className="grid grid-cols-responsive-14 gap-3 justify-items-center"
        items={test}
        layout="grid"
        orientation="horizontal"
      >
        {(item) => (
          <ListBoxItem className="w-fit">
            <div className="bg-zinc-300 text-xs w-12 h-12 rounded-md">
              {item.name}
            </div>
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  )
}

export default CollectionGrid
