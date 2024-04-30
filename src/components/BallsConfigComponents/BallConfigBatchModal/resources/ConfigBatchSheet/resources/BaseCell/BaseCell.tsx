import type { BaseCellProps } from "./BaseCell_types"

function BaseCell({ children }: BaseCellProps): JSX.Element {
  return (
    <div className="text-nowrap border-b border-r border-tuatara-700 bg-tuatara-100 w-full px-1">
      {children}
    </div>
  )
}

export default BaseCell
