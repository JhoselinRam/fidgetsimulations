import WaitIcon from "../../../../../../Icons/WaitIcon/WaitIcon"

function WaitSheet(): JSX.Element {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-16 fill-zinc-300 stroke-zinc-300">
        <WaitIcon />
      </div>
    </div>
  )
}

export default WaitSheet
