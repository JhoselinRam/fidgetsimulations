import useBallRename from "../../../hooks/useBallRename/useBallRename"
import RenameItem from "../../RenameItem/RenameItem"
import type { BallConfigProps } from "../BallConfigComponents_types"

function BallRename({ ballId }: BallConfigProps): JSX.Element {
  const { value, onChange } = useBallRename(ballId)

  return (
    <RenameItem
      className="text-zinc-300 mt-4 mx-4"
      value={value}
      onChange={onChange}
    />
  )
}

export default BallRename
