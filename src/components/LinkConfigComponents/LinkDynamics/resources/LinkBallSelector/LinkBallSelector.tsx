import LinkModalList from "../LinkModalList/LinkModalList"
import LinkModalMove from "../LinkModalMove/LinkModalMove"
import LinkModalPairs from "../LinkModalPairs/LinkModalPairs"
import type { LinkBallSelectorProps } from "./LinkBallSelector_types"

function LinkBallSelector({ listHooks }: LinkBallSelectorProps): JSX.Element {
  return (
    <section className="w-full h-full flex flex-col py-3 gap-2 items-center">
      <LinkModalList {...listHooks} />
      <LinkModalMove />
      <LinkModalPairs />
    </section>
  )
}

export default LinkBallSelector
