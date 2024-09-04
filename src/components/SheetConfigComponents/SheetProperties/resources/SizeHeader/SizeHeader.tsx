import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"

function SizeHeader(): JSX.Element {
  return (
    <ConfigSection.Header>
      <span>Size:</span>
      <Info placement="left" crossOffset={50}>
        <p>
          The sheet is composed of a gid of evenly spaced balls and a rod link,
          which attach each one in succession.
        </p>
        <p className="mt-2">
          Ones created, the rod and all the necessary balls will be added to the
          simulation.
        </p>
        <p className="mt-2">
          Each ball can be configured individually in the ball configuration
          panel.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default SizeHeader
