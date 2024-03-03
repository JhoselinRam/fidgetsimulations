import Button from "../../../Button/Button"
import TransformIcon from "../../../Icons/TransformIcon/TransformIcon"

function ManualControl(): JSX.Element {
  return (
    <header className="flex flex-row items-center gap-3 text-zinc-300">
      Position and Size:
      <Button
        className="w-5 !bg-accent-blue-600 !p-0.5 stroke-zinc-200 data-[hovered]:!bg-accent-blue-500
        data-[focus-visible]:!outline-offset-2"
        buttonType="transparent"
      >
        <TransformIcon />
      </Button>
    </header>
  )
}

export default ManualControl
