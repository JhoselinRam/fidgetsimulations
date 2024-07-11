import CheckInput from "../../../../../../CheckInput/CheckInput"
import BaseCell from "../BaseCell/BaseCell"
import type { CheckCellProps } from "./CheckCell_types"

function CheckCell({ value, danger, ...hooks }: CheckCellProps): JSX.Element {
  return (
    <BaseCell>
      <div className="w-full h-full flex justify-center items-center">
        <CheckInput
          type={danger != null && danger ? "danger" : "accent"}
          isSelected={value}
          {...hooks}
          aria-label="ball delete"
        />
      </div>
    </BaseCell>
  )
}

export default CheckCell
