import { ListBox } from "react-aria-components"
import type { LinkModalListProps } from "./LinkModalList_types"
import ListElement from "../ListElement/ListElement"

function LinkModalList({ ballOptions }: LinkModalListProps): JSX.Element {
  return (
    <div className="w-full h-full border rounded-md border-zinc-500 overflow-y-auto">
      <ListBox
        items={ballOptions}
        selectionMode="multiple"
        aria-label="ball list"
        className="text-sm p-1 text-zinc-300"
      >
        {(item) => <ListElement ballElement={item} />}
      </ListBox>
    </div>
  )
}

export default LinkModalList
