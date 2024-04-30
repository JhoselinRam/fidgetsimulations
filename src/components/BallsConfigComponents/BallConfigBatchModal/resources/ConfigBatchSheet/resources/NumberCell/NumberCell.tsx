import { Input, NumberField } from "react-aria-components"
import BaseCell from "../BaseCell/BaseCell"
import type { NumberCellProps } from "./NumberCell_type"

function NumberCell({
  value,
  decimals,
  maxValue,
  minValue,
  step
}: NumberCellProps): JSX.Element {
  return (
    <BaseCell>
      <NumberField
        className="w-full"
        value={value}
        step={step}
        minValue={minValue}
        maxValue={maxValue}
        formatOptions={{ maximumFractionDigits: decimals }}
      >
        <Input className="w-full bg-transparent outline-none text-right" />
      </NumberField>
    </BaseCell>
  )
}

export default NumberCell
