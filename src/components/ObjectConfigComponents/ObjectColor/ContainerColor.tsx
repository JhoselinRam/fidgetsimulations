import useObjectColor from "../../../hooks/useObjectColor/useObjectColor"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { ObjectConfigProps } from "../ObjectConfig_types"
import BackgroundControl from "./resources/BackgroundControl/BackgroundControl"
import BorderControl from "./resources/BorderControl/BorderControl"

function ObjectColor({ item }: ObjectConfigProps): JSX.Element {
  const { borderHooks, backgroundHooks } = useObjectColor(item)

  return (
    <ConfigSection title="Color">
      <BorderControl {...borderHooks} />
      <BackgroundControl {...backgroundHooks} />
    </ConfigSection>
  )
}

export default ObjectColor
