import ConfigSection from "../../../../ConfigSection/ConfigSection"
import BallConfigBatchModal from "../../../BallConfigBatchModal/BallConfigBatchModal"

function BatchConfigControl(): JSX.Element {
  return (
    <ConfigSection.Header>
      <p className="text-nowrap">Batch configuration:</p>
      <BallConfigBatchModal />
    </ConfigSection.Header>
  )
}

export default BatchConfigControl
