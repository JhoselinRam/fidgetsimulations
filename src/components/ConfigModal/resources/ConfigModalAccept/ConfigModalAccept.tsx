import Button from "../../../Button/Button"
import type { ConfigModalAcceptProps } from "./ConfigModalAccept_types"

function ConfigModalAccept({
  close,
  onAccept
}: ConfigModalAcceptProps): JSX.Element {
  return (
    <Button
      buttonType="accent"
      className="x2s:basis-full sm:basis-auto"
      onPress={() => {
        if (onAccept != null) onAccept()
        close()
      }}
    >
      Accept
    </Button>
  )
}

export default ConfigModalAccept
