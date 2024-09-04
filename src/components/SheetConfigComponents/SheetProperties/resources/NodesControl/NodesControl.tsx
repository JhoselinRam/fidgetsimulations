import ConfigSection from "../../../../ConfigSection/ConfigSection"
import NumberInput from "../../../../NumberInput/NumberInput"
import NodesHeader from "../NodesHeader/NodesHeader"
import type { NodesControlProps } from "./NodesControl_types"

function NodesControl({
  columnsHooks,
  rowsHooks
}: NodesControlProps): JSX.Element {
  return (
    <>
      <NodesHeader />
      <ConfigSection.Section>
        <NumberInput
          minValue={2}
          formatOptions={{ maximumFractionDigits: 0 }}
          step={0.1}
          {...columnsHooks}
        >
          Columns:
        </NumberInput>
        <NumberInput
          className="gap-[1.85rem]"
          minValue={2}
          formatOptions={{ maximumFractionDigits: 0 }}
          step={0.1}
          {...rowsHooks}
        >
          Rows:
        </NumberInput>
      </ConfigSection.Section>
    </>
  )
}

export default NodesControl
