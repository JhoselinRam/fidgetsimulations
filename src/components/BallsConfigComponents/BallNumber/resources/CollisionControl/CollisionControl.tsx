import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import Switch from "../../../../Switch/Switch"
import type { CollisionControlProps } from "./CollisionControl_types"

function CollisionControl({
  changeCollision,
  enableCollision
}: CollisionControlProps): JSX.Element {
  return (
    <ConfigSection.Section>
      <Switch isSelected={enableCollision} onChange={changeCollision}>
        Allow collision
        <Info placement="left" crossOffset={30}>
          <p>Allow the collision between balls.</p>
          <p className="mt-2">
            This doesn&apos;t affect the collision of balls width containers or
            obstacles.
          </p>
        </Info>
      </Switch>
    </ConfigSection.Section>
  )
}

export default CollisionControl
