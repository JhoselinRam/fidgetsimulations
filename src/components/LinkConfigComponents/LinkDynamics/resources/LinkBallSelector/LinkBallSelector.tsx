import LinkModalList from "../LinkModalList/LinkModalList"
import LinkModalMove from "../LinkModalMove/LinkModalMove"
import LinkModalPairs from "../LinkModalPairs/LinkModalPairs"

function LinkBallSelector(): JSX.Element {
  return (
    <section className="w-full h-full flex flex-col py-3 gap-2 items-center">
      <LinkModalList />
      <LinkModalMove />
      <LinkModalPairs />
    </section>
  )
}

export default LinkBallSelector
