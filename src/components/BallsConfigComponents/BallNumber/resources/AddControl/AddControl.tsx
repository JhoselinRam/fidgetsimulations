import ConfigSection from "../../../../ConfigSection/ConfigSection"
import IconButton from "../../../../IconButton/IconButton"
import AddBatchIcon from "../../../../Icons/AddBatchIcon/AddBatchIcon"
import AddIcon from "../../../../Icons/AddIcon/AddIcon"

function AddControl(): JSX.Element {
  return (
    <ConfigSection.Section>
      <div className="grid grid-cols-2 gap-2 w-fit">
        <p>Abb ball:</p>
        <IconButton coloredBy="fill">
          <AddIcon />
        </IconButton>

        <p>Abb batch:</p>
        <IconButton coloredBy="stroke">
          <AddBatchIcon />
        </IconButton>
      </div>
    </ConfigSection.Section>
  )
}

export default AddControl
