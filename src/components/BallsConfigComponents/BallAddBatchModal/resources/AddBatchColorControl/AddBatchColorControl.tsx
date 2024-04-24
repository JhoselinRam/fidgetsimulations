import RadioInput from "../../../../RadioInput/RadioInput"
import AddBatchColorFixedControl from "../AddBatchColorFixedControl/AddBatchColorFixedControl"
import AddBatchColorRangeControl from "../AddBatchColorRangeControl/AddBatchColorRangeControl"
import AddBatchSection from "../AddBatchSection/AddBatchSection"
import type { AddBatchColorControlProps } from "./AddBatchColorControl_types"

function AddBatchColorControl({
  hooks
}: AddBatchColorControlProps): JSX.Element {
  return (
    <AddBatchSection>
      <AddBatchSection.Header>Color:</AddBatchSection.Header>
      <AddBatchSection.Section>
        <RadioInput
          innerClassName="w-full"
          className="w-full"
          optionOrientation="horizontal"
        >
          <AddBatchColorFixedControl />
          <AddBatchColorRangeControl type="linear" />
          <AddBatchColorRangeControl type="random" />
        </RadioInput>
      </AddBatchSection.Section>
    </AddBatchSection>
  )
}

export default AddBatchColorControl
