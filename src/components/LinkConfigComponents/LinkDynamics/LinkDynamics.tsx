import ConfigSection from "../../ConfigSection/ConfigSection"
import LinkBalls from "./resources/LinkBalls/LinkBalls"
import LinkLength from "./resources/LinkLength/LinkLength"
import type { LinkDynamicsProps } from "./LinkDynamics_types"
import useLinkDynamics from "../../../hooks/useLinkDynamics/useLinkDynamics"
import LinkEnableControl from "./resources/LinkEnableControl/LinkEnableControl"

function LinkDynamics({
  item,
  children,
  lengthInfo,
  lengthClassName
}: LinkDynamicsProps): JSX.Element {
  const { lengthHooks, ballList, enableHooks } = useLinkDynamics(item)

  return (
    <ConfigSection title="Dynamics">
      <LinkEnableControl {...enableHooks} />
      {children}
      <LinkLength
        lengthInfo={lengthInfo}
        lengthHooks={lengthHooks}
        lengthClassName={lengthClassName}
      />
      <LinkBalls ballList={ballList} item={item} />
    </ConfigSection>
  )
}

export default LinkDynamics
