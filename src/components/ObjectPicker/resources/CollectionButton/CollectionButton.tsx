import Button from "../../../Button/Button"
import type { CollectionButtonProps } from "./CollectionButton_types"

function CollectionButton({
  action,
  children,
  title
}: CollectionButtonProps): JSX.Element {
  return (
    <Button
      onPress={action}
      className="w-14 !px-0 !bg-zinc-300 text-xs text-tuatara-950 h-[4.25rem] flex flex-col items-center
      pb-1 pt-2 fill-slate-800 data-[hovered]:!bg-zinc-50 data-[pressed]:!bg-accent-blue-100"
      buttonType="transparent"
      aria-label={typeof title === "string" ? title : title.join(" ")}
    >
      <div className="w-7">{children}</div>
      {typeof title === "string" ? (
        <p className="flex-grow flex flex-col justify-center">{title}</p>
      ) : (
        <div className="flex flex-col items-center">
          {title.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </Button>
  )
}

export default CollectionButton
