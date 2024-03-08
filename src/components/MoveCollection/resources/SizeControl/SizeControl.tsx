import NumberInput from "../../../NumberInput/NumberInput"
import LinkSize from "../LinkSize/LinkSize"
import type { SizeControlProps } from "./SizeControl_types"

function SizeControl({
  changeHeight,
  changeWidth,
  height,
  width,
  changeRatioLock,
  isRatioLock
}: SizeControlProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 mt-4 relative w-fit pr-2">
      <NumberInput
        unit="px"
        className="gap-3"
        step={1}
        minValue={0}
        formatOptions={{ maximumFractionDigits: 2 }}
        value={width}
        onChange={changeWidth}
      >
        width:
      </NumberInput>
      <NumberInput
        unit="px"
        step={1}
        minValue={0}
        formatOptions={{ maximumFractionDigits: 2 }}
        value={height}
        onChange={changeHeight}
      >
        height:
      </NumberInput>
      <LinkSize isSelected={isRatioLock} onChange={changeRatioLock} />
    </div>
  )
}

export default SizeControl
