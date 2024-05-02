export interface NumberCellProps {
  value: number
  changeValue: (value: number) => void
  step?: number
  minValue?: number
  maxValue?: number
  decimals?: number
  labelBy?: string
}
