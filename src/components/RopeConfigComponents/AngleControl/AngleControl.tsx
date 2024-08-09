import AngleInput from "../../AngleInput/AngleInput"
import NumberInput from "../../NumberInput/NumberInput"

function AngleControl(): JSX.Element {
  return (
    <div className="flex flex-row gap-2">
      <NumberInput className="gap-4" unit="deg">
        Angle:
      </NumberInput>
      <AngleInput />
    </div>
  )
}

export default AngleControl
