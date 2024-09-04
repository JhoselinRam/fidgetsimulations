import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"

function NodesHeader(): JSX.Element {
  return (
    <ConfigSection.Header className="mt-5">
      <span>Nodes:</span>
      <Info>The number of ball in the sheet.</Info>
    </ConfigSection.Header>
  )
}

export default NodesHeader
