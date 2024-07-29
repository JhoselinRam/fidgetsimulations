import { GridList } from "react-aria-components"
import type { LinkModalPairsProps } from "./LinkModalPairs_types"
import LinkModalPairElement from "../LinkModalPairElement/LinkModalPairElement"

function LinkModalPairs({
  pairElements,
  collectionType
}: LinkModalPairsProps): JSX.Element {
  return (
    <div className="w-full h-full border rounded-md border-zinc-500 overflow-hidden py-2 px-2">
      <div className="w-full h-full overflow-y-auto">
        <GridList
          selectionMode="none"
          items={pairElements}
          aria-label="ball pairs list"
        >
          {(item) => (
            <LinkModalPairElement
              collectionType={collectionType}
              pairElement={item}
            />
          )}
        </GridList>
      </div>
    </div>
  )
}

export default LinkModalPairs
