import type { Dispatch } from "react"
import type {
  MainState,
  MainStateAction
} from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import LinechartIcon from "../../../components/Icons/LinechartIcon/LinechartIcon"
import DataIcon from "../../../components/Icons/DataIcon/DataIcon"
import { createLinechartState } from "../../useMainState/resources/Linechart/defaultState"
import { createDataOutputState } from "../../useMainState/resources/DataOutput/defaultState"

function getGraphicalItems(
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): ItemType[] {
  // ------------------- Line Chart -------------------------

  const lineChartItem: ItemType = {
    id: "linechart",
    title: ["Line", "Chart"],
    action: lineChartAction,
    children: <LinechartIcon />
  }

  function lineChartAction(): void {
    const newLinechart = createLinechartState()
    newLinechart.name = `Linechart ${state.linechart.length + 1}`

    dispatch({
      type: "linechart@new",
      payload: newLinechart as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // -------------------- Data Out --------------------------

  const dataOutItem: ItemType = {
    id: "dataout",
    title: ["Data", "Out"],
    action: dataOutAction,
    children: <DataIcon />
  }

  function dataOutAction(): void {
    const newDataOutput = createDataOutputState()
    newDataOutput.name = `Data out ${state.dataoutput.length + 1}`

    dispatch({
      type: "dataoutput@new",
      payload: newDataOutput as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------

  return [lineChartItem, dataOutItem]
}

export default getGraphicalItems
