import DataIcon from "../../../Icons/DataIcon/DataIcon"
import LinechartIcon from "../../../Icons/LinechartIcon/LinechartIcon"
import type { ItemType } from "../CollectionGrid/CollectionGrid_types"

// ------------------- Line Chart -------------------------

export const lineChartItem: ItemType = {
  id: "linechart",
  title: ["Line", "Chart"],
  action: lineChartAction,
  children: <LinechartIcon />
}

function lineChartAction(): void {
  console.log("Line Chart Action")
}

// --------------------------------------------------------
// -------------------- Data Out --------------------------

export const dataOutItem: ItemType = {
  id: "dataout",
  title: ["Data", "Out"],
  action: dataOutAction,
  children: <DataIcon />
}

function dataOutAction(): void {
  console.log("Data Out Action")
}

// --------------------------------------------------------
