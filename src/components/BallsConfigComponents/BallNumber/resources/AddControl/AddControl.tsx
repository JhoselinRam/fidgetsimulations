import ConfigSection from "../../../../ConfigSection/ConfigSection"
import IconButton from "../../../../IconButton/IconButton"
import AddBatchIcon from "../../../../Icons/AddBatchIcon/AddBatchIcon"
import AddIcon from "../../../../Icons/AddIcon/AddIcon"
import type { AddControlProps } from "./AddControl_types"

function AddControl({ addBall }: AddControlProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <div className="grid grid-cols-2 gap-2 w-fit">
        <p>Add ball:</p>
        <IconButton coloredBy="fill" onPress={addBall}>
          <AddIcon />
        </IconButton>

        <p>Add batch:</p>
        <IconButton coloredBy="stroke">
          <AddBatchIcon />
        </IconButton>
      </div>
    </ConfigSection.Section>
  )
}

export default AddControl
