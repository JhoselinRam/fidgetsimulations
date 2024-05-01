import CheckInput from "../../../../../../CheckInput/CheckInput"
import BaseCell from "../BaseCell/BaseCell"
import type { CheckCellProps } from "./CheckCell_types"

function CheckCell({ value }: CheckCellProps): JSX.Element {
  return (
    <BaseCell>
      <div className="w-full h-full flex justify-center items-center">
        <CheckInput type="danger" isSelected={value} />
      </div>
    </BaseCell>
  )
}

export default CheckCell
