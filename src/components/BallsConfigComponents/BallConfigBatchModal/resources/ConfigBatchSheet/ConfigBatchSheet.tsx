import { forwardRef, useRef } from "react"
import useConfigBatchSheet from "../../../../../hooks/useConfigBatchSheet/useConfigBatchSheet"
import type {
  ConfigBatchSheetProps,
  ConfigSheetRef
} from "./ConfigBatchSheet_types"
import ConfigSheetHeader from "./resources/ConfigSheetHeader/ConfigSheetHeader"
import ConfigSheetRow from "./resources/ConfigSheetRow/ConfigSheetRow"
import WaitIcon from "../../../../Icons/WaitIcon/WaitIcon"

const ConfigBatchSheet = forwardRef<ConfigSheetRef, ConfigBatchSheetProps>(
  ({ rows }, ref): JSX.Element => {
    const cellElement = useRef<HTMLDivElement>(null)
    const gridElement = useRef<HTMLDivElement>(null)
    const {
      arrowNavigation,
      getRowDataRef,
      deleteAllValue,
      onDeleteAll,
      isUpdatingCheckbox,
      ...cellSelectionHooks
    } = useConfigBatchSheet(rows, gridElement, cellElement, ref)

    return (
      <div className="w-full h-full text-sm mt-4 mb-2 bg-tuatara-700 rounded-md overflow-auto">
        <div
          className="grid grid-cols-batch-config auto-rows-fr justify-items-center hover:cursor-cell relative outline-none"
          tabIndex={-1}
          onKeyDown={arrowNavigation}
          ref={gridElement}
        >
          <ConfigSheetHeader
            deleteAllValue={deleteAllValue}
            onDeleteAll={onDeleteAll}
          />
          {rows.map((row, index) => (
            <ConfigSheetRow
              data={row}
              key={row.id}
              index={index}
              ref={getRowDataRef}
              {...cellSelectionHooks}
            />
          ))}
          <div
            className="absolute pointer-events-none z-50 outline outline-tuatara-600"
            ref={cellElement}
          ></div>
        </div>
        {isUpdatingCheckbox && (
          <div className="absolute z-50 top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex justify-center items-center">
            <div className="w-16 fill-zinc-300 stroke-zinc-300">
              <WaitIcon />
            </div>
          </div>
        )}
      </div>
    )
  }
)

ConfigBatchSheet.displayName = "ConfigBatchSheet"

export default ConfigBatchSheet
