import Button from "../../../Button/Button"
import type { CollectionButtonProps } from "./CollectionButton_types"

function CollectionButton({
  action,
  children,
  title
}: CollectionButtonProps): JSX.Element {
  return (
    <Button
      onPress={action}
      className="w-12 !px-0 bg-zinc-300 text-xs h-14"
    ></Button>
  )
}

export default CollectionButton
