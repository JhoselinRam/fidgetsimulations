import { ListBox } from "react-aria-components"
import type { LinkModalListProps } from "./LinkModalList_types"
import ListElement from "../ListElement/ListElement"
import LinkModalListSelection from "../LinkModalListSelection/LinkModalListSelection"

function LinkModalList({
  ballOptions,
  changeBallSelection,
  selectedBalls,
  ballNames
}: LinkModalListProps): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col relative border rounded-md border-zinc-500 overflow-hidden py-1 px-2">
      <div className="w-full h-full overflow-y-auto">
        <ListBox
          items={ballOptions}
          selectionMode="multiple"
          aria-label="ball list"
          className="text-sm text-zinc-300"
          selectedKeys={selectedBalls}
          onSelectionChange={changeBallSelection}
        >
          {(item) => <ListElement ballElement={item} />}
        </ListBox>
      </div>
      <LinkModalListSelection ballNames={ballNames} />
    </div>
  )
}

export default LinkModalList
