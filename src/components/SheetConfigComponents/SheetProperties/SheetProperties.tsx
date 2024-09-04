import ConfigSection from "../../ConfigSection/ConfigSection"
import NodesControl from "./resources/NodesControl/NodesControl"
import RecursionControl from "./resources/RecursionControl/RecursionControl"
import SizeControl from "./resources/SizeControl/SizeControl"
import type { SheetPropertiesProps } from "./SheetProperties_types"

function SheetProperties({
  nodesHooks,
  recursionHooks,
  sizeHooks
}: SheetPropertiesProps): JSX.Element {
  return (
    <ConfigSection title="Properties">
      <SizeControl {...sizeHooks} />
      <NodesControl {...nodesHooks} />
      <RecursionControl {...recursionHooks} />
    </ConfigSection>
  )
}

export default SheetProperties
