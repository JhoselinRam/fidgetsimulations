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
      <Modal className="w-full max-w-modal h-full max-h-modal relative bg-tuatara-900 rounded-md pt-2 pb-4 px-5">
        <Dialog className="outline-none w-full h-full flex flex-col">
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
