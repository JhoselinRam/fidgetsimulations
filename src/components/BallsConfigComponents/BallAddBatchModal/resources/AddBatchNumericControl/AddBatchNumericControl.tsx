import RadioInput from "../../../../RadioInput/RadioInput"
import AddBatchFixedControl from "../AddBatchFixedControl/AddBatchFixedControl"
import AddBatchRangeControl from "../AddBatchRangeControl/AddBatchRangeControl"
import AddBatchSection from "../AddBatchSection/AddBatchSection"
import type { AddBatchNumericControlProps } from "./AddBatchNumericControl_types"

function AddBatchNumericControl({
  title,
  ...numberInputProps
}: AddBatchNumericControlProps): JSX.Element {
  return (
    <AddBatchSection>
      <AddBatchSection.Header>{title}:</AddBatchSection.Header>
      <AddBatchSection.Section>
        <RadioInput
          innerClassName="w-full"
          className="w-full"
          optionOrientation="horizontal"
        >
          <AddBatchFixedControl
            {...numberInputProps}
            label={title.split(" ")[0]}
          />
          <AddBatchRangeControl type="linear" {...numberInputProps} />
          <AddBatchRangeControl type="random" {...numberInputProps} />
        </RadioInput>
      </AddBatchSection.Section>
    </AddBatchSection>
  )
}

export default AddBatchNumericControl
