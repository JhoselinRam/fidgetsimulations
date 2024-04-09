import type { NumberInputProps } from "../../../../NumberInput/NumberInput_types"

export interface AxisPropertyProps
  extends Omit<NumberInputProps, "value" | "onChange"> {
  valueX?: number
  changeValueX?: (value: number) => void
  valueY?: number
  changeValueY?: (value: number) => void
}
