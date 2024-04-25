import type { ColorControlMode } from "../../../../../hooks/useBallAddBatch/resources/useColorControl/useColorControl_types"
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
          value={hooks.controlMode.mode}
          onChange={(mode) => {
            hooks.controlMode.changeMode(mode as ColorControlMode)
          }}
        >
          <AddBatchColorFixedControl
            {...hooks.fixed}
            isModeSelected={hooks.controlMode.mode === "fixed"}
          />
          <AddBatchColorRangeControl
            {...hooks.linear}
            type="linear"
            isModeSelected={hooks.controlMode.mode === "linear"}
          />
          <AddBatchColorRangeControl
            {...hooks.random}
            type="random"
            isModeSelected={hooks.controlMode.mode === "random"}
          />
        </RadioInput>
      </AddBatchSection.Section>
    </AddBatchSection>
  )
}

export default AddBatchColorControl
