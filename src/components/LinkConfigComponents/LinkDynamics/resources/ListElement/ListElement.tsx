import { ListBoxItem } from "react-aria-components"
import type { ListElementProps } from "./ListElement_types"

function ListElement({ ballElement }: ListElementProps): JSX.Element {
  return (
    <ListBoxItem id={ballElement.id} className="my-1">
      {ballElement.name}
    </ListBoxItem>
  )
}

export default ListElement
