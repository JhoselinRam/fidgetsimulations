import ConfigSection from "../../ConfigSection/ConfigSection"
import LinkBalls from "./resources/LinkBalls/LinkBalls"
import LinkLength from "./resources/LinkLength/LinkLength"
import type { LinkDynamicsProps } from "./LinkDynamics_types"
import useLinkDynamics from "../../../hooks/useLinkDynamics/useLinkDynamics"

function LinkDynamics({
  item,
  children,
  lengthInfo,
  lengthClassName
}: LinkDynamicsProps): JSX.Element {
  const { lengthHooks } = useLinkDynamics(item)

  return (
    <ConfigSection title="Dynamics">
      <ConfigSection.Header>Properties:</ConfigSection.Header>
      {children}
      <LinkLength
        lengthInfo={lengthInfo}
        lengthHooks={lengthHooks}
        lengthClassName={lengthClassName}
      />
      <LinkBalls />
    </ConfigSection>
  )
}

export default LinkDynamics
