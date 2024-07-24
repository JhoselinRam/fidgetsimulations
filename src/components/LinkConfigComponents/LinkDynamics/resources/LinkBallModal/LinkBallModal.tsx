import ConfigModal from "../../../../ConfigModal/ConfigModal"
import IconButton from "../../../../IconButton/IconButton"
import EditIcon from "../../../../Icons/EditIcon/EditIcon"
import ModalConfigHeader from "../../../../ModalConfigHeader/ModalConfigHeader"
import LinkBallSelector from "../LinkBallSelector/LinkBallSelector"

function LinkBallModal(): JSX.Element {
  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy="stroke">
          <EditIcon />
        </IconButton>
      }
      isKeyboardDismissDisabled={true}
    >
      <ModalConfigHeader>Ball select:</ModalConfigHeader>
      <LinkBallSelector />
    </ConfigModal>
  )
}

export default LinkBallModal
