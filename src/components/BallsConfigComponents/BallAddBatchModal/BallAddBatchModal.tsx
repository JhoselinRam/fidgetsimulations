import useBallAddBatch from "../../../hooks/useBallAddBatch/useBallAddBatch"
import ConfigModal from "../../ConfigModal/ConfigModal"
import IconButton from "../../IconButton/IconButton"
import AddBatchIcon from "../../Icons/AddBatchIcon/AddBatchIcon"
import ModalConfigHeader from "../../ModalConfigHeader/ModalConfigHeader"
import AddBatchControl from "./resources/AddBatchControl/AddBatchControl"

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
      <ModalConfigHeader>Add Batch:</ModalConfigHeader>
      <AddBatchControl {...formHooks} />
    </ConfigModal>
  )
}

export default BallAddBatchModal
