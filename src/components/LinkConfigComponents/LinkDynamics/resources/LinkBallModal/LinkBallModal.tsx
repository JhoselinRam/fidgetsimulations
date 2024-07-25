import useLinkBallModal from "../../../../../hooks/useLinkBallModal/useLinkBallModal"
import type { ConfigCollectionProps } from "../../../../ConfigCollection/ConfigCollection_types"
import ConfigModal from "../../../../ConfigModal/ConfigModal"
import IconButton from "../../../../IconButton/IconButton"
import EditIcon from "../../../../Icons/EditIcon/EditIcon"
import ModalConfigHeader from "../../../../ModalConfigHeader/ModalConfigHeader"
import LinkBallSelector from "../LinkBallSelector/LinkBallSelector"

function LinkBallModal({ item }: ConfigCollectionProps): JSX.Element {
  const { listHooks, refreshModal } = useLinkBallModal(item)

  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy="stroke" onPress={refreshModal}>
          <EditIcon />
        </IconButton>
      }
      isKeyboardDismissDisabled={true}
    >
      <ModalConfigHeader>Ball select:</ModalConfigHeader>
      <LinkBallSelector listHooks={listHooks} />
    </ConfigModal>
  )
}

export default LinkBallModal
