import Button from "../../Button/Button"
import type { CreateLinkObjectProps } from "./CreateLinkObject_types"

function CreateLinkObject({ onCreate }: CreateLinkObjectProps): JSX.Element {
  return (
    <Button
      buttonType="accent"
      className="w-full !text-base mt-5"
      onPress={onCreate}
    >
      Create
    </Button>
  )
}

export default CreateLinkObject
