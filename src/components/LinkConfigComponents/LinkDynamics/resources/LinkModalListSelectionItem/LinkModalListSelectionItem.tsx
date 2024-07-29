import type { PropsWithChildren } from "react"

function LinkModalListSelectionItem({
  children
}: PropsWithChildren): JSX.Element {
  return (
    <div className="w-full text-center text-nowrap overflow-hidden h-full text-zinc-300 bg-zinc-500 rounded-md">
      {children}
    </div>
  )
}

export default LinkModalListSelectionItem
