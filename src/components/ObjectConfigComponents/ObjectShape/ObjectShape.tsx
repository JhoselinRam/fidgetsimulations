import useObjectShape from "../../../hooks/useObjectShape/useObjectShape"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { ObjectConfigProps } from "../ObjectConfig_types"
import AngleControl from "./resources/AngleControl/AngleControl"
import ShapeControl from "./resources/ShapeControl/ShapeControl"

function ObjectShape({ item }: ObjectConfigProps): JSX.Element {
  const { shapeHooks, angleHooks } = useObjectShape(item)

  return (
    <ConfigSection title="Shape and Orientation">
      <ShapeControl {...shapeHooks} />
      <AngleControl {...angleHooks} />
    </ConfigSection>
  )
}

export default ObjectShape
