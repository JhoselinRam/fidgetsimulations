import type { PropsWithChildren } from "react"

function LinkModalListSelectionItem({
  children
}: PropsWithChildren): JSX.Element {
  return (
    <div className="w-full flex justify-center items-center text-nowrap overflow-hidden h-full text-zinc-900 bg-zinc-300 rounded-full">
      {children}
    </div>
  )
}

export default LinkModalListSelectionItem
