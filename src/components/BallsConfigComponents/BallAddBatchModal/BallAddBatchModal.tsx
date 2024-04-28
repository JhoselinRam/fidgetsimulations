import useBallAddBatch from "../../../hooks/useBallAddBatch/useBallAddBatch"
import ConfigModal from "../../ConfigModal/ConfigModal"
import IconButton from "../../IconButton/IconButton"
import AddBatchIcon from "../../Icons/AddBatchIcon/AddBatchIcon"
import AddBatchControl from "./resources/AddBatchControl/AddBatchControl"
import AddModalHeader from "./resources/AddModalHeader/AddModalHeader"

function BallAddBatchModal(): JSX.Element {
  const { createBatch, ...formHooks } = useBallAddBatch()

  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy="stroke">
          <AddBatchIcon />
        </IconButton>
      }
      onAccept={createBatch}
    >
      <AddModalHeader />
      <AddBatchControl {...formHooks} />
    </ConfigModal>
  )
}

export default BallAddBatchModal
