import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import Switch from "../../../../Switch/Switch"
import type { VectorSizeHeaderProps } from "./VectorSizeHeader_types"

function VectorSizeHeader({
  ...normalizeHooks
}: VectorSizeHeaderProps): JSX.Element {
  return (
    <ConfigSection.Header>
      <Switch {...normalizeHooks} className="flex-row-reverse">
        Normalize:
      </Switch>
      <Info placement="left" crossOffset={30}>
        <p>If set, the vectors will be resized to facilitate readability.</p>
        <p className="mt-3">
          The change is only visual. It will not affect the actual vector
          values.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default VectorSizeHeader
