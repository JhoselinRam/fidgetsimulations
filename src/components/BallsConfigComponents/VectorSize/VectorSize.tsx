import toCapitalize from "../../../auxiliary/toCapitalize"
import useVectorSize from "../../../hooks/useVectorSize/useVectorSize"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { VectorConfigType } from "../BallConfigComponents_types"
import VectorSizeControl from "./resources/VectorSizeControl/VectorSizeControl"
import VectorSizeHeader from "./resources/VectorSizeHeader/VectorSizeHeader"

function VectorSize({ type }: VectorConfigType): JSX.Element {
  const { normalizeHooks, sizeHooks } = useVectorSize(type)

  return (
    <ConfigSection
      titleClassName="text-sm"
      title={`${toCapitalize(type)} Vector Size`}
      dropDefault={false}
    >
      <VectorSizeHeader {...normalizeHooks} />
      <VectorSizeControl type={type} {...sizeHooks} />
    </ConfigSection>
  )
}

export default VectorSize
