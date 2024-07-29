import LinkModalListSelectionItem from "../LinkModalListSelectionItem/LinkModalListSelectionItem"
import type { LinkModalListSelectionProps } from "./LinkModalListSelection_types"

function LinkModalListSelection({
  ballNames
}: LinkModalListSelectionProps): JSX.Element {
  return (
    <div className="flex flex-row mt-2 h-6 items-center px-2 gap-2 absolute top-full left-0 right-0">
      <LinkModalListSelectionItem>{ballNames[0]}</LinkModalListSelectionItem>
      <div className="w-20 shrink-0"></div>
      <LinkModalListSelectionItem>{ballNames[1]}</LinkModalListSelectionItem>
    </div>
  )
}

export default LinkModalListSelection
