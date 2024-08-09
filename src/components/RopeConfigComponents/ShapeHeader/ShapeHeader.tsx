import ConfigSection from "../../ConfigSection/ConfigSection"
import Info from "../../Info/Info"

function ShapeHeader(): JSX.Element {
  return (
    <ConfigSection.Header className="mt-5">
      <span>Shape</span>
      <Info placement="left" crossOffset={90}>
        <p>
          The rope is composed of a series of evenly spaced balls and a rode
          link, which attach each one in succession.
        </p>
        <p className="mt-2">
          The rope is only able to set the general position and length of the
          rope.
        </p>
        <p className="mt-2">
          Each ball can be configured individually in the ball configuration
          panel.
        </p>
        <p className="mt-2">
          If the rope is deleted, all balls and rods associated with it will be
          deleted as well.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default ShapeHeader
