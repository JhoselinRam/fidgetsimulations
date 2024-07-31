import { GridListItem } from "react-aria-components"
import type { LinkModalPairElementProps } from "./LinkModalPairElement_types"
import RodIcon from "../../../../Icons/RodIcon/RodIcon"
import SpringIcon from "../../../../Icons/SpringIcon/SpringIcon"
import DeleteControl from "../../../../DeleteControl/DeleteControl"
import AnimatedListElement from "../../../../AnimatedListElement/AnimatedListElement"
import useLinkModalPairElement from "../../../../../hooks/useLinkModalPairElement/useLinkModalPairElement"

function LinkModalPairElement({
  collectionType,
  pairElement,
  removePair
}: LinkModalPairElementProps): JSX.Element {
  const { onDelete, onExit, shouldExit } = useLinkModalPairElement(
    pairElement,
    removePair
  )

  return (
    <GridListItem
      id={pairElement.id}
      textValue={`${pairElement.nameA} ${pairElement.nameB}`}
      className="outline-none"
    >
      <AnimatedListElement shouldExit={shouldExit} onExit={onExit}>
        <div className="flex flex-row items-center w-full mb-2 gap-0.5">
          <div className="flex flex-row w-full items-center text-sm outline-none py-1 rounded-l-full px-1 bg-zinc-400">
            <p className="w-full text-nowrap text-center overflow-hidden">
              {pairElement.nameA}
            </p>
            <div className="size-[0.85rem] shrink-0">
              {collectionType === "rod" ? <RodIcon /> : <SpringIcon />}
            </div>
            <p className="w-full text-nowrap text-center overflow-hidden ">
              {pairElement.nameB}
            </p>
          </div>
          <div className="flex bg-tuatara-400 rounded-r-full py-1 pr-2 pl-1 hover:bg-tuatara-300">
            <DeleteControl placement="top" onDelete={onDelete} />
          </div>
        </div>
      </AnimatedListElement>
    </GridListItem>
  )
}

export default LinkModalPairElement
