import { Input, NumberField } from "react-aria-components"
import BaseCell from "../BaseCell/BaseCell"
import type { NumberCellProps } from "./NumberCell_type"

function NumberCell({
  decimals,
  maxValue,
  minValue,
  step,
  labelBy,
  ...hooks
}: NumberCellProps): JSX.Element {
  return (
    <BaseCell>
      <NumberField
        className="w-full hover:cursor-cell"
        {...hooks}
        step={step}
        minValue={minValue}
        maxValue={maxValue}
        formatOptions={{ maximumFractionDigits: decimals }}
        aria-label={labelBy}
      >
        <Input className="w-full bg-transparent outline-none text-right data-[hovered]:cursor-cell" />
      </NumberField>
    </BaseCell>
  )
}

export default NumberCell
