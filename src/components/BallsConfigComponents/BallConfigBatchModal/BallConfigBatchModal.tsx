import { useRef } from "react"
import useConfigBatchModal from "../../../hooks/useConfigBatchModal/useConfigBatchModal"
import ConfigModal from "../../ConfigModal/ConfigModal"
import IconButton from "../../IconButton/IconButton"
import BatchConfigIcon from "../../Icons/BatchConfigIcon/BatchConfigIcon"
import ConfigBatchHeader from "./resources/ConfigBatchHeader/ConfigBatchHeader"
import ConfigBatchSheet from "./resources/ConfigBatchSheet/ConfigBatchSheet"
import type { ConfigSheetRef } from "./resources/ConfigBatchSheet/ConfigBatchSheet_types"

function BallConfigBatchModal(): JSX.Element {
  const sheetData = useRef<ConfigSheetRef>(null)
  const { rows, updateRows, onAccept } = useConfigBatchModal(sheetData)

  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy="fill" onPress={updateRows}>
          <BatchConfigIcon />
        </IconButton>
      }
      isKeyboardDismissDisabled={true}
      onAccept={onAccept}
    >
      <ConfigBatchHeader />
      <ConfigBatchSheet rows={rows} ref={sheetData} />
    </ConfigModal>
  )
}

export default BallConfigBatchModal
