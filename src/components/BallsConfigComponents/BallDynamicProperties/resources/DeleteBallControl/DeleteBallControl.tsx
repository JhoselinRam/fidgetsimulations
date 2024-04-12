import useDeleteBall from "../../../../../hooks/useDeleteBall/useDeleteBall"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import DeleteControl from "../../../../DeleteControl/DeleteControl"
import type { BallConfigWidthValidation } from "../../../BallConfigComponents_types"

function DeleteBallControl({
  ballId,
  isValidSelection
}: BallConfigWidthValidation): JSX.Element {
  const { onDelete } = useDeleteBall(ballId)

  return (
    <ConfigSection.Header>
      <p>Delete Ball:</p>
      <div className="bg-tuatara-600 rounded-md size-5 flex justify-center">
        <DeleteControl onDelete={onDelete} disabled={!isValidSelection} />
      </div>
    </ConfigSection.Header>
  )
}

export default DeleteBallControl
