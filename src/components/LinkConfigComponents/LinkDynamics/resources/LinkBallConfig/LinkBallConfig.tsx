import ConfigSection from "../../../../ConfigSection/ConfigSection"
import Info from "../../../../Info/Info"
import LinkBallModal from "../LinkBallModal/LinkBallModal"
import type { LinkBallConfigProps } from "./LinkBallConfig_types"

function LinkBallConfig({ item }: LinkBallConfigProps): JSX.Element {
  return (
    <ConfigSection.Header className="mt-5">
      <p className="text-nowrap">Balls affected:</p>
      <LinkBallModal />
      <Info placement="left" crossOffset={20}>
        <p>
          A {item.type} constriction with the same properties will be applied to
          each pair of balls in the list.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default LinkBallConfig
