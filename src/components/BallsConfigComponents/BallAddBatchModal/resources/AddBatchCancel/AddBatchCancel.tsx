import Button from "../../../../Button/Button"
import type { AddBatchCancelProps } from "./AddBatchCancel_types"

function AddBatchCancel({ close }: AddBatchCancelProps): JSX.Element {
  return (
    <Button buttonType="regular" onPress={close}>
      Cancel
    </Button>
  )
}

export default AddBatchCancel
