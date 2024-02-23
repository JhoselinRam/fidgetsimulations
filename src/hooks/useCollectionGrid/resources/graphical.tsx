import type { Dispatch } from "react"
import type { MainStateAction } from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import LinechartIcon from "../../../components/Icons/LinechartIcon/LinechartIcon"
import DataIcon from "../../../components/Icons/DataIcon/DataIcon"
import { createLinechartState } from "../../../components/Linechart/defaultState"
import { createDataOutputState } from "../../../components/DataOutput/defaultState"

function getGraphicalItems(dispatch: Dispatch<MainStateAction>): ItemType[] {
  // ------------------- Line Chart -------------------------

  const lineChartItem: ItemType = {
    id: "linechart",
    title: ["Line", "Chart"],
    action: lineChartAction,
    children: <LinechartIcon />
  }

  function lineChartAction(): void {
    const newLinechart = createLinechartState() as unknown as Record<
      string,
      unknown
    >
    dispatch({ type: "linechart@new", payload: newLinechart })
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
    const newDataOutput = createDataOutputState() as unknown as Record<
      string,
      unknown
    >
    dispatch({ type: "dataoutput@new", payload: newDataOutput })
  }

  // --------------------------------------------------------

  return [lineChartItem, dataOutItem]
}

export default getGraphicalItems
