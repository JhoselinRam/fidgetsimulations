import { GridList } from "react-aria-components"
import ConfigSection from "../../../../ConfigSection/ConfigSection"
import LinkBallConfig from "../LinkBallConfig/LinkBallConfig"
import type { LinkBallProps } from "./LinkBall_types"
import LinkBallItem from "../LinkBallItem/LinkBallItem"

function LinkBalls({ ballList, item }: LinkBallProps): JSX.Element {
  return (
    <>
      <LinkBallConfig item={item} />
      <ConfigSection.Section>
        <section className="border border-tuatara-500 rounded-md w-full h-48 bg-tuatara-700 overflow-y-auto  px-2">
          <GridList
            items={ballList}
            selectionMode="none"
            aria-label="link ball list"
          >
            {(ballElement) => (
              <LinkBallItem ballElement={ballElement} item={item} />
            )}
          </GridList>
        </section>
      </ConfigSection.Section>
    </>
  )
}

export default LinkBalls
