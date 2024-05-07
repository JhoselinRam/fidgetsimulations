import type { BaseCellProps } from "./BaseCell_types"

function BaseCell({ children }: BaseCellProps): JSX.Element {
  return (
    <div
      className="text-nowrap border-b border-r border-tuatara-700 bg-tuatara-100 w-full px-1 hover:cursor-cell relative
    has-[input[data-focused='true']]:before:absolute has-[input[data-focused='true']]:before:top-0 has-[input[data-focused='true']]:before:bottom-0
    has-[input[data-focused='true']]:before:left-0 has-[input[data-focused='true']]:before:right-0 has-[input[data-focused='true']]:before:border
    has-[input[data-focused='true']]:before:border-cyan-950 has-[input[data-focused='true']]:before:z-50"
    >
      {children}
    </div>
  )
}

export default BaseCell
