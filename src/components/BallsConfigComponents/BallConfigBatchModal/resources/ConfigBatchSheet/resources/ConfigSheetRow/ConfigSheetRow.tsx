import { forwardRef } from "react"
import useSheetRow from "../../../../../../../hooks/useConfigBatchSheet/resources/useSheetRow/useSheetRow"
import CheckCell from "../CheckCell/CheckCell"
import ColorCell from "../ColorCell/ColorCell"
import HeaderCell from "../HeaderCell/HeaderCell"
import NumberCell from "../NumberCell/NumberCell"
import TextCell from "../TextCell/TextCell"
import type {
  ConfigSheetRowProps,
  ConfigSheetRowRef
} from "./ConfigSheetRow_types"

const ConfigSheetRow = forwardRef<ConfigSheetRowRef, ConfigSheetRowProps>(
  (
    {
      data,
      index,
      setSelectedCell,
      setSelectionMode,
      blurCell,
      onEnter,
      setLastSelectedColumn
    },
    ref
  ): JSX.Element => {
    const {
      charge,
      color,
      deleteBall,
      mass,
      name,
      positionX,
      positionY,
      radius,
      velocityX,
      velocityY
    } = useSheetRow(
      data,
      index,
      setSelectedCell,
      setSelectionMode,
      blurCell,
      onEnter,
      ref,
      setLastSelectedColumn
    )

    return (
      <>
        <HeaderCell>{index + 1}</HeaderCell>
        <TextCell {...name} />
        <NumberCell {...positionX} labelBy="ball position x" />
        <NumberCell {...positionY} labelBy="ball position y" />
        <NumberCell {...velocityX} labelBy="ball velocity x" />
        <NumberCell {...velocityY} labelBy="ball velocity y" />
        <NumberCell
          {...mass}
          minValue={import.meta.env.VITE_BALL_MIN_MASS}
          labelBy="ball mass"
          decimals={4}
        />
        <NumberCell {...charge} labelBy="ball charge" />
        <NumberCell
          {...radius}
          minValue={import.meta.env.VITE_BALL_MIN_RADIUS}
          labelBy="ball radius"
          decimals={3}
        />
        <ColorCell {...color} />
        <CheckCell {...deleteBall} />
      </>
    )
  }
)

ConfigSheetRow.displayName = "ConfigSheetRow"

export default ConfigSheetRow
