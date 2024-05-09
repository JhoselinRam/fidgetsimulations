import { useRef } from "react"
import useConfigBatchSheet from "../../../../../hooks/useConfigBatchSheet/useConfigBatchSheet"
import type { ConfigBatchSheetProps } from "./ConfigBatchSheet_types"
import ConfigSheetHeader from "./resources/ConfigSheetHeader/ConfigSheetHeader"
import ConfigSheetRow from "./resources/ConfigSheetRow/ConfigSheetRow"
import type { SelectionStylePicker } from "./resources/BaseCell/BaseCell_types"

function ConfigBatchSheet({ rows }: ConfigBatchSheetProps): JSX.Element {
  const cellElement = useRef<HTMLDivElement>(null)
  const gridElement = useRef<HTMLDivElement>(null)
  const { arrowNavigation, selectionMode } = useConfigBatchSheet(
    rows,
    gridElement,
    cellElement
  )

  const sharedSelectedStyles = "pointer-events-none"
  const selectedStyles: SelectionStylePicker = {
    view: `${sharedSelectedStyles} outline outline-cyan-950`,
    edit: `${sharedSelectedStyles} border border-tuatara-950`
  }

  return (
    <div className="w-full h-full text-sm mt-4 mb-2 bg-tuatara-700 rounded-md overflow-auto">
      <div
        className="grid grid-cols-batch-config auto-rows-fr justify-items-center hover:cursor-cell relative"
        tabIndex={-1}
        onKeyDown={arrowNavigation}
        ref={gridElement}
      >
        <ConfigSheetHeader />
        {rows.map((row, index) => (
          <ConfigSheetRow data={row} key={row.id} index={index} />
        ))}
        <div
          className={`absolute ${selectedStyles[selectionMode]}`}
          ref={cellElement}
        ></div>
      </div>
    </div>
  )
}

export default ConfigBatchSheet
