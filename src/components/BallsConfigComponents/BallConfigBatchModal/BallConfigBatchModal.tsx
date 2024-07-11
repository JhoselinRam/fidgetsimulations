import { useRef } from "react"
import useConfigBatchModal from "../../../hooks/useConfigBatchModal/useConfigBatchModal"
import ConfigModal from "../../ConfigModal/ConfigModal"
import IconButton from "../../IconButton/IconButton"
import BatchConfigIcon from "../../Icons/BatchConfigIcon/BatchConfigIcon"
import ConfigBatchHeader from "./resources/ConfigBatchHeader/ConfigBatchHeader"
import ConfigBatchSheet from "./resources/ConfigBatchSheet/ConfigBatchSheet"
import type { ConfigSheetRef } from "./resources/ConfigBatchSheet/ConfigBatchSheet_types"
import WaitIcon from "../../Icons/WaitIcon/WaitIcon"
import WaitSheet from "./resources/ConfigBatchSheet/resources/WaitSheet/WaitSheet"

function BallConfigBatchModal(): JSX.Element {
  const sheetData = useRef<ConfigSheetRef>(null)
  const { rows, updateRows, onAccept, isLoading, onClose } =
    useConfigBatchModal(sheetData)

  return (
    <ConfigModal
      triggerElement={
        <IconButton coloredBy={isLoading ? "all" : "fill"} onPress={updateRows}>
          {isLoading ? <WaitIcon /> : <BatchConfigIcon />}
        </IconButton>
      }
      isKeyboardDismissDisabled={true}
      onAccept={onAccept}
      onClose={onClose}
      onCancel={onClose}
    >
      <ConfigBatchHeader />
      {isLoading ? (
        <WaitSheet />
      ) : (
        <ConfigBatchSheet rows={rows} ref={sheetData} />
      )}
    </ConfigModal>
  )
}

export default BallConfigBatchModal
