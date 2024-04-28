import type { NumericControlMode } from "../../../../../hooks/useBallAddBatch/resources/useNumericControl/useNumericControl_types"
import RadioInput from "../../../../RadioInput/RadioInput"
import AddBatchFixedControl from "../AddBatchFixedControl/AddBatchFixedControl"
import AddBatchRangeControl from "../AddBatchRangeControl/AddBatchRangeControl"
import AddBatchSection from "../AddBatchSection/AddBatchSection"
import type { AddBatchNumericControlProps } from "./AddBatchNumericControl_types"

function AddBatchNumericControl({
  title,
  hooks,
  ...numberInputProps
}: AddBatchNumericControlProps): JSX.Element {
  return (
    <AddBatchSection>
      <AddBatchSection.Header>{title}:</AddBatchSection.Header>
      <AddBatchSection.Section className="w-full">
        <RadioInput
          innerClassName="w-full flex-wrap gap-3 sm:flex-nowrap sm:gap-2"
          className="w-full rounded-md bg-tuatara-700/50 border border-zinc-600
          sm:bg-transparent sm:border-transparent overflow-auto sm:overflow-visible"
          optionOrientation="horizontal"
          value={hooks.controlMode.mode}
          onChange={(mode) => {
            hooks.controlMode.changeMode(mode as NumericControlMode)
          }}
        >
          <AddBatchFixedControl
            {...numberInputProps}
            {...hooks.fixed}
            isModeSelected={hooks.controlMode.mode === "fixed"}
            label={title.split(" ")[0]}
          />
          <AddBatchRangeControl
            type="linear"
            {...numberInputProps}
            {...hooks.linear}
            isModeSelected={hooks.controlMode.mode === "linear"}
          />
          <AddBatchRangeControl
            type="random"
            {...numberInputProps}
            {...hooks.random}
            isModeSelected={hooks.controlMode.mode === "random"}
          />
        </RadioInput>
      </AddBatchSection.Section>
    </AddBatchSection>
  )
}

export default AddBatchNumericControl
