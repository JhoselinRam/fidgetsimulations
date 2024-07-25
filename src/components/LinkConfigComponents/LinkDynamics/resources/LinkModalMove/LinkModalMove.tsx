import Button from "../../../../Button/Button"
import MoveArrowIcon from "../../../../Icons/MoveArrowIcon/MoveArrowIcon"

function LinkModalMove(): JSX.Element {
  return (
    <Button className="group">
      <div className="w-10 py-0.5 stroke-tuatara-200 group-data-[pressed]:stroke-tuatara-50">
        <MoveArrowIcon />
      </div>
    </Button>
  )
}

export default LinkModalMove
