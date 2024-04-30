import type { HeaderCellProps } from "./HeaderCell_types"

function HeaderCell({ children }: HeaderCellProps): JSX.Element {
  return (
    <h1
      className={`text-nowrap text-center border-b border-r border-tuatara-700 bg-tuatara-300 h-fit w-full px-1 ${
        children == null ? "text-transparent" : ""
      }`}
    >
      {children ?? "."}
    </h1>
  )
}

export default HeaderCell
