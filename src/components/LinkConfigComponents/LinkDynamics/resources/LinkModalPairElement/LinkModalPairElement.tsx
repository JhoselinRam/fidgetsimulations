import { GridListItem } from "react-aria-components"
import type { LinkModalPairElementProps } from "./LinkModalPairElement_types"
import RodIcon from "../../../../Icons/RodIcon/RodIcon"
import SpringIcon from "../../../../Icons/SpringIcon/SpringIcon"

function LinkModalPairElement({
  collectionType,
  pairElement
}: LinkModalPairElementProps): JSX.Element {
  return (
    <GridListItem
      id={pairElement.id}
      textValue={`${pairElement.nameA} ${pairElement.nameB}`}
    >
      <div className="flex flex-row items-center text-sm outline-none py-1 mb-2 rounded-md px-1 bg-zinc-400/50">
        <p className="w-full text-nowrap text-center overflow-hidden ">
          {pairElement.nameA}
        </p>
        <div className="size-[0.85rem] shrink-0">
          {collectionType === "rod" ? <RodIcon /> : <SpringIcon />}
        </div>
        <p className="w-full text-nowrap text-center overflow-hidden ">
          {pairElement.nameB}
        </p>
      </div>
    </GridListItem>
  )
}

export default LinkModalPairElement
