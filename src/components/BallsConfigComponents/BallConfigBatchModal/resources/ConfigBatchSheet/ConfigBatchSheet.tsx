import type { ConfigBatchSheetProps } from "./ConfigBatchSheet_types"
import ConfigSheetHeader from "./resources/ConfigSheetHeader/ConfigSheetHeader"
import ConfigSheetRow from "./resources/ConfigSheetRow/ConfigSheetRow"

function ConfigBatchSheet({ rows }: ConfigBatchSheetProps): JSX.Element {
  return (
    <div className="w-full h-full text-sm mt-4 mb-2 bg-tuatara-700 rounded-md overflow-auto">
      <div
        className="grid grid-cols-batch-config auto-rows-fr justify-items-center hover:cursor-cell"
        tabIndex={-1}
      >
        <ConfigSheetHeader />
        {rows.map((row, index) => (
          <ConfigSheetRow data={row} key={row.id} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ConfigBatchSheet
