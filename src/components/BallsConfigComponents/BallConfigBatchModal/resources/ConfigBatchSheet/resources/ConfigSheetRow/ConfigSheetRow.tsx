import CheckCell from "../CheckCell/CheckCell"
import ColorCell from "../ColorCell/ColorCell"
import HeaderCell from "../HeaderCell/HeaderCell"
import NumberCell from "../NumberCell/NumberCell"
import TextCell from "../TextCell/TextCell"
import type { ConfigSheetRowProps } from "./ConfigSheetRow_types"

function ConfigSheetRow({ data, index }: ConfigSheetRowProps): JSX.Element {
  return (
    <>
      <HeaderCell>{index + 1}</HeaderCell>
      <TextCell value={data.name} />
      <NumberCell value={data.positionX} />
      <NumberCell value={data.positionY} />
      <NumberCell value={data.velocityX} />
      <NumberCell value={data.velocityY} />
      <NumberCell value={data.mass} />
      <NumberCell value={data.charge} />
      <NumberCell value={data.radius} />
      <ColorCell value={data.color} />
      <CheckCell value={data.delete} />
    </>
  )
}

export default ConfigSheetRow
