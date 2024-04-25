import { Dialog, DialogTrigger, Modal } from "react-aria-components"
import IconButton from "../../IconButton/IconButton"
import AddBatchIcon from "../../Icons/AddBatchIcon/AddBatchIcon"
import AddModalHeader from "./resources/AddModalHeader/AddModalHeader"
import CloseAddModal from "./resources/CloseAddModal/CloseAddModal"
import AddBatchControl from "./resources/AddBatchControl/AddBatchControl"
import AddBatchCancel from "./resources/AddBatchCancel/AddBatchCancel"
import AddBatchAccept from "./resources/AddBatchAccept/AddBatchAccept"
import useBallAddBatch from "../../../hooks/useBallAddBatch/useBallAddBatch"

function BallAddBatchModal(): JSX.Element {
  const { createBatch, ...formHooks } = useBallAddBatch()

  return (
    <DialogTrigger>
      <IconButton coloredBy="stroke">
        <AddBatchIcon />
      </IconButton>
      <Modal className="w-full max-w-modal h-full max-h-modal relative bg-tuatara-900 rounded-md pt-2 pb-3 px-5">
        <Dialog className="outline-none w-full h-full flex flex-col">
          {({ close }) => (
            <>
              <AddModalHeader />
              <CloseAddModal close={close} />
              <AddBatchControl {...formHooks} />
              <div className="w-full flex flex-row justify-end gap-3">
                <AddBatchCancel close={close} />
                <AddBatchAccept close={close} createBatch={createBatch} />
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default BallAddBatchModal
