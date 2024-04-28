import Button from "../../../Button/Button"
import type { ConfigModalCancelProps } from "./ConfigModalCancel_types"

function ConfigModalCancel({
  close,
  onCancel
}: ConfigModalCancelProps): JSX.Element {
  return (
    <Button
      buttonType="regular"
      className="x2s:basis-full sm:basis-auto"
      onPress={() => {
        if (onCancel != null) onCancel()
        close()
      }}
    >
      Cancel
    </Button>
  )
}

export default ConfigModalCancel
