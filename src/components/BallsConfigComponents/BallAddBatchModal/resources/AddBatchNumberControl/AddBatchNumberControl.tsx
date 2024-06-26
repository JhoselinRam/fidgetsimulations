import NumberInput from "../../../../NumberInput/NumberInput"
import AddBatchSection from "../AddBatchSection/AddBatchSection"
import type { AddBatchNumberControlProps } from "./AddBatchNumberControl_types"

function AddBatchNumberControl({
  changeNumber,
  number
}: AddBatchNumberControlProps): JSX.Element {
  return (
    <AddBatchSection>
      <AddBatchSection.Header className="!-mb-1 sm:!mb-3 place-self-start">
        <NumberInput
          labelClassName="text-base"
          inputClassName="text-slate-950 my-0.5"
          formatOptions={{ maximumFractionDigits: 0 }}
          minValue={0}
          step={0.04}
          value={number}
          onChange={changeNumber}
          innerStep={1}
        >
          Number:
        </NumberInput>
      </AddBatchSection.Header>
    </AddBatchSection>
  )
}

export default AddBatchNumberControl
