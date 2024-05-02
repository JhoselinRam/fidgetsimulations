import CheckCell from "../CheckCell/CheckCell"
import ColorCell from "../ColorCell/ColorCell"
import HeaderCell from "../HeaderCell/HeaderCell"
import NumberCell from "../NumberCell/NumberCell"
import TextCell from "../TextCell/TextCell"
import type { ConfigSheetRowProps } from "./ConfigSheetRow_types"

function ConfigSheetRow({
  data,
  index,
  changeSheetState
}: ConfigSheetRowProps): JSX.Element {
  return (
    <>
      <HeaderCell>{index + 1}</HeaderCell>
      <TextCell
        value={data.name}
        changeValue={(value) => {
          changeSheetState("name", value, index)
        }}
      />
      <NumberCell
        value={data.positionX}
        changeValue={(value) => {
          changeSheetState("positionX", value, index)
        }}
        labelBy="ball position x"
      />
      <NumberCell
        value={data.positionY}
        changeValue={(value) => {
          changeSheetState("positionY", value, index)
        }}
        labelBy="ball position y"
      />
      <NumberCell
        value={data.velocityX}
        changeValue={(value) => {
          changeSheetState("velocityX", value, index)
        }}
        labelBy="ball velocity x"
      />
      <NumberCell
        value={data.velocityY}
        changeValue={(value) => {
          changeSheetState("velocityY", value, index)
        }}
        labelBy="ball velocity y"
      />
      <NumberCell
        value={data.mass}
        changeValue={(value) => {
          changeSheetState("mass", value, index)
        }}
        labelBy="ball mass"
      />
      <NumberCell
        value={data.charge}
        changeValue={(value) => {
          changeSheetState("charge", value, index)
        }}
        labelBy="ball charge"
      />
      <NumberCell
        value={data.radius}
        changeValue={(value) => {
          changeSheetState("radius", value, index)
        }}
        labelBy="ball radius"
      />
      <ColorCell
        value={data.color}
        changeValue={(value) => {
          changeSheetState("color", value, index)
        }}
      />
      <CheckCell
        value={data.delete}
        changeValue={(value) => {
          changeSheetState("delete", value, index)
        }}
      />
    </>
  )
}

export default ConfigSheetRow
