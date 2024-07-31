import Button from "../../../../Button/Button"
import MoveArrowIcon from "../../../../Icons/MoveArrowIcon/MoveArrowIcon"
import type { LinkModalMoveProps } from "./LinkModalMove_types"

function LinkModalMove({ onMovePairs }: LinkModalMoveProps): JSX.Element {
  return (
    <Button
      className="group w-fit z-50 shrink-0 sm:-rotate-90 sm:-mx-2"
      onPress={onMovePairs}
    >
      <div className="w-10 py-0.5 stroke-tuatara-200 group-data-[pressed]:stroke-tuatara-50 ">
        <MoveArrowIcon />
      </div>
    </Button>
  )
}

export default LinkModalMove
