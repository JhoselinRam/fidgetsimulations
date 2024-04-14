import { Dialog, DialogTrigger, Modal } from "react-aria-components"
import IconButton from "../../IconButton/IconButton"
import AddBatchIcon from "../../Icons/AddBatchIcon/AddBatchIcon"
import AddModalHeader from "./resources/AddModalHeader/AddModalHeader"
import CloseAddModal from "./resources/CloseAddModal/CloseAddModal"
import AddBatchControl from "./resources/AddBatchControl/AddBatchControl"

function BallAddBatchModal(): JSX.Element {
  return (
    <DialogTrigger>
      <IconButton coloredBy="stroke">
        <AddBatchIcon />
      </IconButton>
      <Modal className="w-full max-w-modal relative bg-tuatara-900 rounded-md py-2 px-5">
        <Dialog className="outline-none">
          {({ close }) => (
            <>
              <AddModalHeader />
              <CloseAddModal close={close} />
              <AddBatchControl />
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default BallAddBatchModal
