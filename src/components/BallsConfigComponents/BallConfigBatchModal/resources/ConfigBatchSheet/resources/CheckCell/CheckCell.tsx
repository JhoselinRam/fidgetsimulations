import BaseCell from "../BaseCell/BaseCell"
import type { CheckCellProps } from "./CheckCell_types"

function CheckCell({ value }: CheckCellProps): JSX.Element {
  return <BaseCell>{value ? "true" : "false"}</BaseCell>
}

export default CheckCell
