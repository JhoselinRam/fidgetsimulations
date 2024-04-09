import NumberInput from "../../../../NumberInput/NumberInput"
import type { AxisPropertyProps } from "./AxisProperty_types"

function AxisProperty({
  changeValueX,
  changeValueY,
  valueX,
  valueY,
  ...props
}: AxisPropertyProps): JSX.Element {
  return (
    <>
      <NumberInput value={valueX} onChange={changeValueX} {...props}>
        x:
      </NumberInput>
      <NumberInput value={valueY} onChange={changeValueY} {...props}>
        y:
      </NumberInput>
    </>
  )
}

export default AxisProperty
