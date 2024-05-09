import useConfigBatchModal from "../../../hooks/useConfigBatchModal/useConfigBatchModal"
import ConfigModal from "../../ConfigModal/ConfigModal"
import IconButton from "../../IconButton/IconButton"
import BatchConfigIcon from "../../Icons/BatchConfigIcon/BatchConfigIcon"
import ConfigBatchHeader from "./resources/ConfigBatchHeader/ConfigBatchHeader"
import ConfigBatchSheet from "./resources/ConfigBatchSheet/ConfigBatchSheet"

function BallConfigBatchModal(): JSX.Element {
  const { rows, updateRows } = useConfigBatchModal()

  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy="fill" onPress={updateRows}>
          <BatchConfigIcon />
        </IconButton>
      }
      isKeyboardDismissDisabled={true}
    >
      <ConfigBatchHeader />
      <ConfigBatchSheet rows={rows} />
    </ConfigModal>
  )
}

export default BallConfigBatchModal
