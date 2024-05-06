import type { BaseCellProps } from "./BaseCell_types"

function BaseCell({ children }: BaseCellProps): JSX.Element {
  return (
    <div
      className="text-nowrap border-b border-r border-tuatara-700 bg-tuatara-100 w-full px-1 hover:cursor-cell
    has-[*[data-focused='true']]:outline has-[*[data-focused='true']]:outline-cyan-900 has-[*[data-focused='true']]:outline-2
    has-[*[data-focused='true']]:z-50"
    >
      {children}
    </div>
  )
}

export default BaseCell
