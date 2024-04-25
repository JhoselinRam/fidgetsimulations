import Button from "../../../../Button/Button"
import type { AddBatchAcceptProps } from "./AddBatchAccept_types"

function AddBatchAccept({
  close,
  createBatch
}: AddBatchAcceptProps): JSX.Element {
  return (
    <Button
      buttonType="accent"
      onPress={() => {
        createBatch()
        close()
      }}
    >
      Accept
    </Button>
  )
}

export default AddBatchAccept
