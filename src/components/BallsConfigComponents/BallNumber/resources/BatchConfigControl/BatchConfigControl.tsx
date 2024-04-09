import ConfigSection from "../../../../ConfigSection/ConfigSection"
import IconButton from "../../../../IconButton/IconButton"
import BatchConfigIcon from "../../../../Icons/BatchConfigIcon/BatchConfigIcon"

function BatchConfigControl(): JSX.Element {
  return (
    <ConfigSection.Header>
      <p className="text-nowrap">Batch configuration:</p>
      <IconButton coloredBy="fill">
        <BatchConfigIcon />
      </IconButton>
    </ConfigSection.Header>
  )
}

export default BatchConfigControl
