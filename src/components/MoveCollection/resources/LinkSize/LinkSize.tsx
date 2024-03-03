import LinkIcon from "../../../Icons/LinkIcon/LinkIcon"

function LinkSize(): JSX.Element {
  return (
    <div className="w-4 h-6 rounded-full bg-tuatara-600 stroke-tuatara-900 flex justify-end items-center absolute top-1/2 -translate-y-1/2 right-0 translate-x-full">
      <LinkIcon />
    </div>
  )
}

export default LinkSize
