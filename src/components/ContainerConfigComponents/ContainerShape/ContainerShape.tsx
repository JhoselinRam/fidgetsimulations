import useContainerShape from "../../../hooks/useContainerShape/useContainerShape"
import ConfigSection from "../../ConfigSection/ConfigSection"
import type { ContainerConfigProps } from "../ContainerConfig_types"
import AngleControl from "./resources/AngleControl/AngleControl"
import ShapeControl from "./resources/ShapeControl/ShapeControl"

function ContainerShape({ item }: ContainerConfigProps): JSX.Element {
  const { shapeHooks, angleHooks } = useContainerShape(item)

  return (
    <ConfigSection title="Shape and Orientation">
      <ShapeControl {...shapeHooks} />
      <AngleControl {...angleHooks} />
    </ConfigSection>
  )
}

export default ContainerShape
