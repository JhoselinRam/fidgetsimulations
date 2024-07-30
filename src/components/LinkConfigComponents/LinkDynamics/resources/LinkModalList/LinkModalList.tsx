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
    <div className="w-full h-full max-h-[45%] relative">
      <ListBox
        items={ballOptions}
        selectionMode="multiple"
        aria-label="ball list"
        className="text-sm text-zinc-300 h-full overflow-auto border rounded-md bg-tuatara-800 border-zinc-500 py-1 px-2"
        selectedKeys={selectedBalls}
        onSelectionChange={changeBallSelection}
      >
        {(item) => <ListElement ballElement={item} />}
      </ListBox>
      <LinkModalListSelection ballNames={ballNames} />
    </div>
  )
}

export default LinkModalList
