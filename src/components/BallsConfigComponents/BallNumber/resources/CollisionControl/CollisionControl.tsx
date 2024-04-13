import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import Switch from "../../../../Switch/Switch"

function CollisionControl(): JSX.Element {
  return (
    <ConfigSection.Section>
      <Switch>
        Allow collision
        <Info placement="left" crossOffset={30}>
          <p>Allow the collision between balls.</p>
          <p className="mt-2">
            This doesn&apos;t affect the collision between balls and containers
            or obstacles.
          </p>
        </Info>
      </Switch>
    </ConfigSection.Section>
  )
}

export default CollisionControl
