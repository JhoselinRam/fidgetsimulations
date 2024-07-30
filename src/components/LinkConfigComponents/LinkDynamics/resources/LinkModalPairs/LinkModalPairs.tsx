import { GridList } from "react-aria-components"
import type { LinkModalPairsProps } from "./LinkModalPairs_types"
import LinkModalPairElement from "../LinkModalPairElement/LinkModalPairElement"

function LinkModalPairs({
  pairElements,
  ...pairHooks
}: LinkModalPairsProps): JSX.Element {
  return (
    <div className="w-full h-full border rounded-md border-zinc-500 bg-tuatara-800 overflow-hidden py-2 px-2">
      <GridList
        selectionMode="none"
        items={pairElements}
        aria-label="ball pairs list"
        className="w-full h-full overflow-y-auto"
      >
        {(item) => <LinkModalPairElement pairElement={item} {...pairHooks} />}
      </GridList>
    </div>
  )
}

export default LinkModalPairs
