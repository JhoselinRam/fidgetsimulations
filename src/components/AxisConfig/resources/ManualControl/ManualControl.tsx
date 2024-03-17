import Button from "../../../Button/Button"
import ConfigSection from "../../../ConfigSection/ConfigSection"
import AspectRatioIcon from "../../../Icons/AspectRatioIcon/AspectRatioIcon"
import Info from "../../../Info/Info"

function ManualControl(): JSX.Element {
  return (
    <ConfigSection.Header>
      <p>Domain:</p>
      <Button
        className="w-5 !p-0.5 bg-tuatara-600 fill-slate-950 data-[focus-visible]:outline-offset-2
        data-[pressed]:bg-accent-blue-500 data-[pressed]:fill-zinc-100 data-[hovered]:bg-tuatara-500"
        buttonType="transparent"
      >
        <AspectRatioIcon />
      </Button>
      <Info placement="left" crossOffset={20}>
        <p>Sets the axis aspect ratio to 1:1</p>
        <p className="mt-2">
          To ensure the correct aspect ratio the <i>y</i> domain will be
          changed.
        </p>
      </Info>
    </ConfigSection.Header>
  )
}

export default ManualControl
