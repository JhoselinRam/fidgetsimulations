import { GridListItem } from "react-aria-components"
import type { LinkBallItemProps } from "./LinkBallItem_types"
import RodIcon from "../../../../Icons/RodIcon/RodIcon"
import SpringIcon from "../../../../Icons/SpringIcon/SpringIcon"

function LinkBallItem({ item, ballElement }: LinkBallItemProps): JSX.Element {
  return (
    <GridListItem id={ballElement.id} textValue={ballElement.id}>
      <div className="flex flex-row items-center text-sm outline-none py-1 my-2 rounded-full px-1 bg-zinc-400">
        <p className="w-full text-nowrap text-center overflow-hidden ">
          {ballElement.nameA}
        </p>
        <div className="size-[0.85rem] shrink-0">
          {item.type === "rod" ? <RodIcon /> : <SpringIcon />}
        </div>
        <p className="w-full text-nowrap text-center overflow-hidden ">
          {ballElement.nameB}
        </p>
      </div>
    </GridListItem>
  )
}

export default LinkBallItem
