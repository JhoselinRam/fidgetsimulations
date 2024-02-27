import Button from "../../../Button/Button"
import DragHAndlerIcon from "../../../Icons/DragHandlerIcon/DragHandlerIcon"

function DragHandler(): JSX.Element {
  return (
    <Button
      className="w-2 !px-0 fill-tuatara-900 flex-shrink-0"
      buttonType="transparent"
      aria-label="drag handler"
      slot="drag"
    >
      <DragHAndlerIcon />
    </Button>
  )
}

export default DragHandler
