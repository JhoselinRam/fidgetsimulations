import { GridListItem } from "react-aria-components"
import type { LinkBallItemProps } from "./LinkBallItem_types"
import LinkIcon from "../../../../Icons/LinkIcon/LinkIcon"

function LinkBallItem({ item }: LinkBallItemProps): JSX.Element {
  return (
    <GridListItem id={item.id}>
      <div className="flex flex-row items-center text-sm outline-none py-1 my-2 rounded-md px-1 bg-zinc-400/50">
        <p className="w-full text-nowrap text-center overflow-hidden ">
          {item.nameA}
        </p>
        <div className="size-[0.85rem] shrink-0 fill-zinc-300">
          <LinkIcon />
        </div>
        <p className="w-full text-nowrap text-center overflow-hidden ">
          {item.nameB}
        </p>
      </div>
    </GridListItem>
  )
}

export default LinkBallItem
