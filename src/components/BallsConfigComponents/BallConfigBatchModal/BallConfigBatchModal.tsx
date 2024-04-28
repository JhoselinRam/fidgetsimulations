import ConfigModal from "../../ConfigModal/ConfigModal"
import IconButton from "../../IconButton/IconButton"
import BatchConfigIcon from "../../Icons/BatchConfigIcon/BatchConfigIcon"
import ConfigBatchHeader from "./resources/ConfigBatchHeader/ConfigBatchHeader"
import ConfigBatchSheet from "./resources/ConfigBatchSheet/ConfigBatchSheet"

function BallConfigBatchModal(): JSX.Element {
  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy="fill">
          <BatchConfigIcon />
        </IconButton>
      }
    >
      <ConfigBatchHeader />
      <ConfigBatchSheet />
    </ConfigModal>
  )
}

export default BallConfigBatchModal
