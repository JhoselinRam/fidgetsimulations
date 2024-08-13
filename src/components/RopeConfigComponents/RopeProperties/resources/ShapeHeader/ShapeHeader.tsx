import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"

function ShapeHeader(): JSX.Element {
  return (
    <ConfigSection.Header>
      <span>Shape:</span>
      <Info placement="left" crossOffset={70}>
        <p>
          The rope is composed of a series of evenly spaced balls and a rod
          link, which attach each one in succession.
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

export default ShapeHeader
