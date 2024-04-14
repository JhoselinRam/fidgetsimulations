import Button from "../../../../Button/Button"
import CloseIcon from "../../../../Icons/CloseIcon/CloseIcon"
import type { CloseAddModalProps } from "./CloseAddModal_types"

function CloseAddModal({ close }: CloseAddModalProps): JSX.Element {
  return (
    <Button
      className="w-6 !px-0 absolute top-2 right-1 group"
      buttonType="transparent"
      aria-label="closeToolBar"
      onPress={close}
    >
      <CloseIcon className="fill-zinc-300 group-data-[hovered]:fill-zinc-300/70" />
    </Button>
  )
}

export default CloseAddModal
