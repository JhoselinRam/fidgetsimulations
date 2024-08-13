import Button from "../../Button/Button"
import type { CreateRopeProps } from "./CreateRope_types"

function CreateRope({ onCreate }: CreateRopeProps): JSX.Element {
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

export default CreateRope
